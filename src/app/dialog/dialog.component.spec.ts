import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { DialogComponent } from './dialog.component';
import { By } from '@angular/platform-browser';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  @Component({
    template: `<app-dialog>This is ng-content</app-dialog>`,
  })
  class TestHostComponent {}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogComponent, TestHostComponent],
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

  it('should render the modal title in h2 tag', () => {
    const modalTitle = 'Dialog Box with text';
    fixture.nativeElement.querySelector('h2').textContent = modalTitle;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain(modalTitle);
  });

  it('should show ng content', () => {
    const testFixture = TestBed.createComponent(TestHostComponent);
    const ngContent = 'This is ng-content';
    const de: DebugElement = testFixture.debugElement.query(
      By.css('div.modal-body')
    );
    const el: Element = de.nativeElement;

    expect(el.textContent).toEqual(ngContent);
  });
});
