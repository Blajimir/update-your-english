import {Component} from '@angular/core';
import {Word} from './word.model';
import {Observable} from 'rxjs/Observable'
import {Http, Request} from '@angular/http';

@Component({
  selector: 'app-my-vocabulary',
  templateUrl: './my-vocabulary.component.html',
  styleUrls: ['./my-vocabulary.component.css']
})
export class MyVocabularyComponent {
  myWords: Array<Word>;

  constructor(private http: Http) {
    this.myWords = [new Word('cat'), new Word('dog'), new Word('rabbit'), new Word('fox'), new Word('bird'), new Word('fish')];
    this.http.get('http://localhost:4200/assets/words.json').map(resp => {
        console.log('http status: '+resp.status);
        return resp.json();
      }).map(stream => stream.map(res => new Word(res.value,res.rate)))
        .subscribe(words=> words.forEach(word=> console.log(word.toString())));
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
