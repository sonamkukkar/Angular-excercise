import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'Dialog Boxes';
  modalTitle1: string = 'Dialog box with Text';
  modalTitle2: string = 'Dialog box with HTML Form';
  modalTitle3: string = 'Dialog box with Custom Component';
  isDialog1Opened: boolean = false;
  isDialog2Opened: boolean = false;
  isDialog3Opened: boolean = false;

  openDialog1() {
    this.isDialog1Opened = true;
    this.isDialog2Opened = false;
    this.isDialog3Opened = false;
  }
  openDialog2() {
    this.isDialog1Opened = false;
    this.isDialog2Opened = true;
    this.isDialog3Opened = false;
  }
  openDialog3() {
    this.isDialog1Opened = false;
    this.isDialog2Opened = false;
    this.isDialog3Opened = true;
  }
  closeDialog1(value: boolean) {
    this.isDialog1Opened = value;
  }
  closeDialog2(value: boolean = false) {
    this.isDialog2Opened = value;
  }
  closeDialog3(value: boolean) {
    this.isDialog3Opened = value;
  }
}
