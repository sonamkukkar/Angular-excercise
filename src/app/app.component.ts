import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title!: string;
  modalTitle1!: string;
  modalTitle2!: string;
  modalTitle3!: string;
  isDialog1Opened!: boolean;
  isDialog2Opened!: boolean;
  isDialog3Opened!: boolean;

  ngOnInit(): void {
    this.title = 'Dialog Boxes';
    this.modalTitle1 = 'Dialog box with Text';
    this.modalTitle2 = 'Dialog box with HTML Form';
    this.modalTitle3 = 'Dialog box with Custom Component';
    this.isDialog1Opened = false;
    this.isDialog2Opened = false;
    this.isDialog3Opened = false;
  }

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
