import {Component} from '@angular/core';
import {Word} from './word.model';
import {MyVocabularyService} from "./my-vocabulary.service";

@Component({
  selector: 'app-my-vocabulary',
  templateUrl: './my-vocabulary.component.html',
  styleUrls: ['./my-vocabulary.component.css']
})
export class MyVocabularyComponent {
  myWords: Array<Word>;

  constructor(private myVocabularyService: MyVocabularyService) {
    this.myVocabularyService.myWordsFeed.subscribe(word => this.myWords.push(word));
  }


  checkSyntax(word: string): boolean {
    if (!word || this.myWords.some((elem) => {
        if (elem.value == word)
          return true;
      })) {
      return false;
    }
    return true;
  }

  addWords(input: HTMLInputElement): void {

    let wordArr: string[] = input.value.replace(/[\.,;:_]+/g, " ").split(/\s+/);
    wordArr.forEach((word) => {
      if (this.checkSyntax(word)) {
        this.testFunc(word);
        this.myWords.push(new Word(word.toLowerCase()));
      }
    });
    input.value = '';
  }

  testFunc(v): void {
    console.log('some data: ' + v);
  }

}
