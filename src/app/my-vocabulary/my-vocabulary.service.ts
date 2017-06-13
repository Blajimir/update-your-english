/**
 * Created by a.a.kovalev on 13.06.2017.
 */

import {Injectable} from '@angular/core';
import {Word} from "./word.model";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class MyVocabularyService {
  myWordsFeed: Observable<Word>;
  private wordsObserver: any;
  private errorWordsObserver: any;
  private wordUrl: string = 'http://localhost:4200/assets/words.json';
  private words: Array<Word> = [];

  constructor(private http: Http) {
    this.myWordsFeed = new Observable(observer => this.wordsObserver = observer);
    this.loadWords();
  }

  loadWords() {
    this.http.get(this.wordUrl).map(resp => {
      console.log('http status: ' + resp.status);
      return resp.json();
    }).map(stream => stream.map(res => new Word(res.value, res.rate)))
      .subscribe(words => {
        this.words = words;
        words.forEach(word => this.wordsObserver.next(word))
      });
  }
  //TODO Сделать проверку на существования передаваемого слова
  private checkWord(word:string):boolean{
    if (!word || this.words.some((elem) => {
        if (elem.value == word)
          return true;
      })) {
      return false;
    }
    return true;
  }
  private saveWord(word: string): Word {
    //TODO Сохранить новое слово на сервере
    if(this.checkWord(word)){
      return new Word(word);
    }else{
      return null;
    }

  }

  addWord(word: string) {
    let result: Word = this.saveWord(word);
    if (result) {
      this.wordsObserver.next(result);
    }else{
      this.wordsObserver.error(`Word: $word already exist!`);
    }
  }
}
