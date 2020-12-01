import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  @Input()
  modalTitle!: string;
  @Input() modalContent!: string | HTMLFormElement | CustomElementConstructor;

  @Output() onCloseButtonClick = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  closeDialog() {
    this.onCloseButtonClick.emit(false);
  }
}
