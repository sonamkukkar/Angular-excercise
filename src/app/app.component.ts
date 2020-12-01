import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'angular-exercise';
  modalTitle!: string;
  modalContent!: string;
  isDialogOpened = false;

  ngOnInit() {
    this.modalTitle = 'Modal Box';
    this.modalContent = 'Are you sure you want to close the modal dialog?';
  }
  openDialog() {
    this.isDialogOpened = true;
  }
  closeModalDialog(value: boolean) {
    this.isDialogOpened = value;
  }
}
