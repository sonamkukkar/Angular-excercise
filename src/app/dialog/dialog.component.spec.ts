import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogComponent } from './dialog.component';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the modal title in h3 tag', () => {
    const modalTitle = 'Dialog Box with text';
    fixture.nativeElement.querySelector('h3').textContent = modalTitle;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain(modalTitle);
  });

  it('should close the modal dialog on clicking close icon', () => {
    const closeButton = fixture.debugElement.nativeElement.querySelector(
      '.close'
    );
    closeButton.click();
    expect(component.onCloseButtonClick).toBeDefined();
  });
});
