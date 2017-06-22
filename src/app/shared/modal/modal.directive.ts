import {AfterViewInit, Directive, ElementRef, Renderer2} from '@angular/core';

const SHOW: string = 'show';

@Directive({
  selector: '[btModal]',
  exportAs: 'bt-modal'
})
export class ModalDirective implements AfterViewInit {
  private isHide: boolean;

  constructor(private _rederer: Renderer2, private _er: ElementRef) {

  }

  ngAfterViewInit(): void {
    if (!this.hasClass(SHOW)) {
      this.isHide = true;
    }
    this._rederer.listen(this._er.nativeElement,'transitionend',); //'transitionend'
  }

  private hasClass(className: string): boolean {
    return this._er.nativeElement.classList.contains(className);
  }

  show(){
    if(!this.hasClass(SHOW)){

    }
  }

}
