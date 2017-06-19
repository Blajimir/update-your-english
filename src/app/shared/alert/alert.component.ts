import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-alert',
  animations: [
    trigger('fade', [
      state('show', style({opacity: 1.0})),
      state('hide', style({opacity: 0.0})),
      transition('show => hide', animate('1s ease-out')),
      transition('hide => show', animate('1s ease-in'))
    ])
  ],
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  fadeState: string;
  @Input() afterHide: (event) => void ;

  constructor() {
    this.fadeState = 'show';
  }

  hide(){
    this.fadeState = 'hide';
  }

  callbackAfterHide(event){
    console.group( "Done animating" );
    console.log( "From: ", event.fromState );
    console.log( "To: ", event.toState );
    console.log( "Actual State: ", this.fadeState );
    console.groupEnd();
    if(event.toState=='hide'){
      this.afterHide(event);
    }
  }

}
