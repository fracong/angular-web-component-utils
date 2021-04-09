import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[app-drag]'
})
export class DragDirective {
  private isDown = false;
  private disX = 0;
  private disY = 0;
  private dom: any;
  @Input('dragClassName') className: string;
  @Input('dragType') type: string;
  remarkDivLeft: string;
  _showLeft: boolean;
  @Input('showLeft')
  set showLeft(showLeft: boolean) {
    this._showLeft = showLeft;
    if (!showLeft) {
      this.dom = this.getParentRecurse(this.el.nativeElement, this.className);
      if (this.dom && this.dom.style && this.dom.style.left) {
        this.remarkDivLeft = this.dom.style.left;
        this.dom.style.left = '0px';
      }
    } else {
      if (this.remarkDivLeft) {
        this.dom = this.getParentRecurse(this.el.nativeElement, this.className);
        this.dom.style.left = this.remarkDivLeft;
      }
    }
  }
  get showLeft(): boolean {
    return this._showLeft;
  }
  @Input('leftMin') leftMin: number;
  @Input('leftMax') leftMax: number;
  @Output('afterMove') afterMove = new EventEmitter<any>();

  constructor(private el: ElementRef) { }

  @HostListener('drag', ['event'])
  dragEvent() {
    console.log('drag');
  }
 
  ngOnInit() {
 
  }
 
  @HostListener('mousedown', ['$event']) onMousedown(event) {
    if (!this.isDown) {
      this.dom = this.getParentRecurse(this.el.nativeElement, this.className);
      this.isDown = true;
      this.disX = event.clientX - this.dom.offsetLeft;
      this.disY = event.clientY - this.dom.offsetTop;
    }
  }

  getParentRecurse(dom: any, className: string) {
    if (!className) {
      return dom;
    }
    if (dom.classList && dom.classList.contains(className)) {
      return dom;
    } else if (dom.parentNode) {
      return this.getParentRecurse(dom.parentNode, className);
    } else {
      console.log(`cannot found the className of node is ${className}, return`);
      return dom;
    }
  }
 
  @HostListener('document:mousemove', ['$event']) onMousemove(event) {
    if (this.isDown && this._showLeft) {
      const cw = document.documentElement.clientWidth;
      const cy = document.documentElement.clientHeight;
      const dw = this.dom.offsetWidth;
      const dh = this.dom.offsetHeight;
 
      let oLeft = event.clientX - this.disX;
      let oTop = event.clientY - this.disY;
 
      if (oTop < 0) {
        oTop = 0;
      } else if (oTop > cy - dh) {
        oTop = cy - dh;
      }
 
      if (oLeft < 0) {
        oLeft = 0;
      } else if (oLeft > cw - dw) {
        oLeft = cw - dw;
      }

      if (this.type == 'all') {
        this.dom.style.left = oLeft + 'px';
        this.dom.style.top = oTop + 'px';
      } else if (this.type == 'vertical' 
        && (!this.leftMin || (this.leftMin && oLeft > this.leftMin))
        && (!this.leftMax || (this.leftMax && oLeft < this.leftMax))){
        this.dom.style.left = oLeft + 'px';
      }
      this.backMoveInfo();
    }
  }

  backMoveInfo() {
    let element = this.el.nativeElement as HTMLElement;
    let leftFlex =  Number.parseInt(element.style.left.replace('px', ''));
    let parentElement = element.parentElement;
    let allWidth = parentElement.clientWidth;
    let rightFlex = allWidth - leftFlex;
    let json = {
      leftFlex: leftFlex,
      rightFlex: rightFlex,
    }
    this.afterMove.emit(json);
  }

  @HostListener('document:mouseup', ['$event']) onMouseup() {
    if (this.isDown) {
      document.onmousemove = null;
      document.onmouseup = null;
      this.isDown = false;
    }
  }
}
