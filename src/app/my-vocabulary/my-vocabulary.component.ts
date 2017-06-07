import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-vocabulary',
  templateUrl: './my-vocabulary.component.html',
  styleUrls: ['./my-vocabulary.component.css']
})
export class MyVocabularyComponent implements OnInit {
  myWords:string[]= new Array("cat","dog","rabbit","fox","bird","fish");
  constructor() {
    
  }

  ngOnInit() {
  }

}
