import {AfterViewInit, Directive, ElementRef, EventEmitter, Output, Renderer2} from '@angular/core';

const SHOW: string = 'show';

@Directive({
  selector: '[btModal]',
  exportAs: 'bt-modal'
})
export class ModalDirective implements AfterViewInit {
  //private isHide: boolean;
  @Output() onShow: EventEmitter<any> = new EventEmitter();
  @Output() onHide: EventEmitter<any> = new EventEmitter();

  constructor(private _rederer: Renderer2, private _er: ElementRef) {
  }

  ngAfterViewInit(): void {
    this._rederer.setStyle(this._er.nativeElement, 'background', 'rgba(0,0,0,0.5)');
    this._rederer.listen(this._er.nativeElement, 'transitionend', event => this.animationEnd(event)); //'transitionend'
    this._rederer.listen(this._er.nativeElement, 'webkitTransitionEnd', event => this.animationEnd(event));
  }

  animationEnd(event: any): void {
    if (event.target == this._er.nativeElement && !this.hasClass(SHOW)) {
      this._rederer.setStyle(this._er.nativeElement, 'display', 'none');
      this.onHide.emit(event);
    } else if (event.target == this._er.nativeElement && this.hasClass(SHOW)) {
      this.onShow.emit(event);
    }
  }

  private hasClass(className: string): boolean {
    return this._er.nativeElement.classList.contains(className);
  }

  show(): void {
    if (!this.hasClass(SHOW)) {
      this._rederer.setStyle(this._er.nativeElement, 'display', 'block');
      this._er.nativeElement.focus();
      this._rederer.addClass(this._er.nativeElement, 'show');
    }
  }

  hide(): void {
    if (this.hasClass(SHOW)) {
      this._rederer.removeClass(this._er.nativeElement, 'show');
    }
  }

}
