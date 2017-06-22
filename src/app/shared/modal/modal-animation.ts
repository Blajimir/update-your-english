import {animate, animateChild, query, state, style, transition, trigger} from "@angular/animations";

export const ModalAnimation = [
  trigger('modal-area',[
    state('show',style({opacity:1.0})),
    state('hide',style({opacity:0.0})),
    transition('show=>hide',animate('1s ease-out')),
    transition('hide=>show',[animate('1s ease-in'),query('.modal',[])])
  ]),
  trigger('modal-dialog',[
    state('in',style({transform:'translateX(100%)'})),
    state('out',style({transform:'translateX(0)'})),
    transition('in=>out',animate('1s ease-out')),
    transition('out=>in',animate('1s ease-in'))
  ])
];
