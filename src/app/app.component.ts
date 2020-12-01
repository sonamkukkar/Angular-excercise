import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  modalTitle1!: string;
  modalTitle2!: string;
  modalTitle3!: string;
  isDialog1Opened: boolean = false;
  isDialog2Opened: boolean = false;
  isDialog3Opened: boolean = false;

  ngOnInit() {
    this.modalTitle1 = 'Modal Box with text';
    this.modalTitle2 = 'Model Box with form';
    this.modalTitle3 = 'Model Box with custom component';
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
  closeModalDialog1(value: boolean) {
    this.isDialog1Opened = value;
  }
  closeModalDialog2(value: boolean = false) {
    this.isDialog2Opened = value;
  }
  closeModalDialog3(value: boolean) {
    this.isDialog3Opened = value;
  }
}
