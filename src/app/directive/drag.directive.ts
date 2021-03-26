import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[app-drag]'
})
export class DragDirective {
  private isDown = false;
  private disX = 0;
  private disY = 0;
  private dom: any;
  @Input('dragDlassName') className: string;
  @Input('dragType') type: string;
  @Input('leftClass') leftClass: string;
  @Input('leftMin') leftMin: number;
  @Input('leftMax') leftMax: number;
  @Input('rightClass') rightClass: string;
  @Input('topClass') topClass: string;
  @Input('bottomClass') bottomClass: string;

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
      console.log('cannot found the class Name(' + className + ')');
      return dom;
    }
  }
 
  @HostListener('document:mousemove', ['$event']) onMousemove(event) {
    if (this.isDown) {
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
        this.dom.style.position = 'absolute';
      } else if (this.type == 'vertical' 
        && (!this.leftMin || (this.leftMin && oLeft > this.leftMin))
        && (!this.leftMax || (this.leftMax && oLeft < this.leftMax))){
        this.dom.style.left = oLeft + 'px';
        this.dom.style.position = 'absolute';
      }
      this.changeOtherDiv();
    }
  }
 
  @HostListener('document:mouseup', ['$event']) onMouseup() {
    if (this.isDown) {
      document.onmousemove = null;
      document.onmouseup = null;
      this.isDown = false;
    }
  }

  changeOtherDiv() {
    let element = this.el.nativeElement as HTMLElement;
    if (element) {
      let parentElement = element.parentElement;
      parentElement.childNodes.forEach(e => {
        let eh = e as HTMLElement;
        if (this.type == 'vertical') {
          if (!this.leftClass || !this.rightClass) {
            console.info('leftClass | rightClass is null.')
            return;
          }
          if (element.style.left) {
            let left =  Number.parseInt(element.style.left.replace('px', ''));
            let allWidth = parentElement.clientWidth;
            if (eh.classList && eh.classList.contains(this.leftClass)) {
              eh.style.flex = String(left);
            } else if (eh.classList && eh.classList.contains(this.rightClass)) {
              eh.style.flex = String(allWidth - left);
            }
          }
        }
      });
    }
  }

}
