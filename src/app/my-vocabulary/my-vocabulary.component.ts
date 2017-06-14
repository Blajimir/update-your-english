import {Component} from '@angular/core';
import {Word} from './word.model';
import {MyVocabularyService} from "./my-vocabulary.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-my-vocabulary',
  templateUrl: './my-vocabulary.component.html',
  styleUrls: ['./my-vocabulary.component.css']
})
export class MyVocabularyComponent {
  myWords: Array<Word> = [];

  constructor(private myVocabularyService: MyVocabularyService) {
    this.myVocabularyService.myWordsFeed.subscribe(word => {
      this.myWords.push(word)
    },error=>console.log(error));
    this.myVocabularyService.errorFeed.subscribe(err=>console.warn('Error add word: %s',err),err=>console.error('Error: %s',err));
  }

  addWords(input: HTMLInputElement): void {

    let wordArr: string[] = input.value.replace(/[\.,;:_]+/g, " ").split(/\s+/);
    wordArr.forEach((word) => {
      //this.testFunc(word);
      this.myVocabularyService.addWord(word);
    });
    input.value = '';
  }

  testFunc(v): void {
    console.log('some data: ' + v);
  }

}
