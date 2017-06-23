import {Component} from '@angular/core';
import {Word} from './word.model';
import {MyVocabularyService} from './my-vocabulary.service';
import {trigger, transition, animate, keyframes, style} from '@angular/animations';

@Component({
  selector: 'app-my-vocabulary',
  animations: [
    trigger('testAnim', [
      transition('from => to', animate(600, keyframes([
        style({transform: 'rotateX(-90deg)', opacity: 0.0}),
        style({transform: 'skew(10deg) rotateX(-85deg)', opacity: 0.0}),
        style({transform: 'skew(-10deg) rotateX(-80deg)', opacity: 0.1}),
        style({transform: 'skew(10deg) rotateX(-70deg)', opacity: 0.2}),
        style({transform: 'skew(-10deg) rotateX(-45deg)', opacity: 0.3}),
        style({transform: 'skew(12deg) rotateX(-40deg)', opacity: 0.4}),
        style({transform: 'skew(-10deg) rotateX(-35deg)', opacity: 0.5}),
        style({transform: 'skew(12deg) rotateX(-20deg)', opacity: 0.6}),
        style({transform: 'skew(-10deg) rotateX(-10deg)', opacity: 0.8}),
        style({transform: 'none', opacity: 1.0})
      ])))
    ])
  ],
  templateUrl: './my-vocabulary.component.html',
  styleUrls: ['./my-vocabulary.component.css'],
})
export class MyVocabularyComponent {
  myWords: Array<Word> = [];
  stateAnim: string = 'from';

  constructor(private myVocabularyService: MyVocabularyService) {
    this.myVocabularyService.myWordsFeed.subscribe(word => {
      this.myWords.push(word)
    }, error => console.log(error));
    this.myVocabularyService.errorFeed.subscribe(err => console.warn('Error add word: %s', err), err => console.error('Error: %s', err));
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

  anim() {
    this.stateAnim = 'to';
  }

  afterAnim(event) {
    console.group("Done animating");
    console.log("From: ", event.fromState);
    console.log("To: ", event.toState);
    console.log("Actual State: ", this.stateAnim);
    console.groupEnd();
    this.stateAnim = 'from';
  }


}
