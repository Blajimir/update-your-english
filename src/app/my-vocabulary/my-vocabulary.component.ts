import {Component} from '@angular/core';

@Component({
  selector: 'app-my-vocabulary',
  templateUrl: './my-vocabulary.component.html',
  styleUrls: ['./my-vocabulary.component.css']
})
export class MyVocabularyComponent {
  myWords: Array<string>;

  constructor() {
    this.myWords = ['cat', 'dog', 'rabbit', 'fox', 'bird', 'fish'];
    console.log('app-my-vocabulary create');
  }

  addWord(word: string) {
    this.myWords.push(word);
    console.log(this.myWords);
  }

}
