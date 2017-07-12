import {Injectable} from '@angular/core';
import {RrHttpService} from "../shared/shared";
import {Word} from "../my-vocabulary/word.model";
import {RequestOptionsArgs} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class MyTrainingService {
  myWords: Array<Word> = [];
  variantsFeed: Observable<string>;
  variantsObsever: any;
  constructor(private http: RrHttpService) {
    this.variantsFeed = new Observable(observer => this.variantsObsever = observer);
    this.getWords();
  }

  public getWords(): void {
    this.http.get("api/word/list").map(resp => resp.json())
      .map(stream => stream.map(res => new Word(res.value, res.rate)))
      .subscribe(words => this.myWords = words);
  }

  public upRate(word:Word):void{
    this.http.post("api/word/uprate", <RequestOptionsArgs> {body:  JSON.stringify(word)}).map(resp => resp.json())
      .map(obj => new Word(obj.value,obj.rate)).subscribe(result => {
        if(result&&result.value==word.value){
          if(result.rate >=100){
            this.getWords();
          }else{
            word.rate = result.rate;
          }

        }
       });
  }

  public downRate(word:Word):void{
    this.http.post("api/word/downrate", <RequestOptionsArgs> {body:  JSON.stringify(word)}).map(resp => resp.json())
      .map(obj => new Word(obj.value,obj.rate)).subscribe(result => {
      if(result&&result.value==word.value){
        if(result.rate >=100){
          this.getWords();
        }else{
          word.rate = result.rate;
        }

      }
    });
  }

  public getVariants(word:Word):void{
    this.http.put("api/word/variants", <RequestOptionsArgs> {body:  JSON.stringify(word)})
      .map(resp => resp.json()).subscribe(arr => this.variantsObsever.next(arr));
  }






  /*this.http.get(this.wordUrl).map(resp => {
   console.log('http status: ' + resp.status);
   return resp.json();
   }).map(stream => stream.map(res => new Word(res.value, res.rate)))
   .subscribe(words => {
   this.words = words;
   words.forEach(word => this.wordsObserver.next(word))
   });*/

}
