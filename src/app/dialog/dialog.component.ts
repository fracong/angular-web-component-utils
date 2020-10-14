import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Dialog } from '../model/dialog/dialog.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  @Input('isDisplay') isDisplay: boolean;
  @Input('dialog') dialog: Dialog;
  @Input('title') title: string;
  @Input('saveBtnDisabled') saveBtnDisabled: boolean;
  @Input('form') formGroup : FormGroup;
  @Output() closeClick: EventEmitter<any> = new EventEmitter<any>();
  @Output('clickBtn') clickBtnAction: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  closeBtn() {
    this.isDisplay = false;
    this.closeClick.emit();
  }

  clickBtn(key: number) {
    if(key == 2 && this.saveBtnDisabled) return;
    this.clickBtnAction.emit(key);
  }

}
