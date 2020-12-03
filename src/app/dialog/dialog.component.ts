import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  @Input() modalTitle!: string;

  @Output() onCloseButtonClick = new EventEmitter<boolean>();

closeDialog() {
    this.onCloseButtonClick.emit(false);
  }
}
