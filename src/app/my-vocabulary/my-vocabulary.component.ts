import {Component} from '@angular/core';
import {Word} from './word.model'

@Component({
  selector: 'app-my-vocabulary',
  templateUrl: './my-vocabulary.component.html',
  styleUrls: ['./my-vocabulary.component.css']
})
export class MyVocabularyComponent {
  myWords: Array<Word>;

  constructor() {
    this.myWords = [new Word('cat'), new Word('dog'), new Word('rabbit'), new Word('fox'), new Word('bird'), new Word('fish')];
  }

  //TODO Сделать проверку на существования передаваемого слова
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
        this.myWords.push(new Word(word.toLowerCase()));
      }
    });
    input.value='';
  }

}
