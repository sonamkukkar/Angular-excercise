import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, DialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Dialoge Boxes'`, () => {
    const appTitle = 'Dialog Boxes';
    expect(component.title).toEqual(appTitle);
  });

  it('should render the title in h1 tag', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content h1').textContent).toContain(
      component.title
    );
  });

  it('all modal dialogs should be hidden by default', () => {
    expect(component.isDialog1Opened).toBeFalsy();
    expect(component.isDialog2Opened).toBeFalsy();
    expect(component.isDialog3Opened).toBeFalsy();
  });

  it('should open the modal dialog with text as content on first button click (Open Dialog box 1 button)', () => {
    const buttonElement = fixture.debugElement.nativeElement.querySelector(
      '#open-dialog-btn-1'
    );
    buttonElement.click();
    expect(component.isDialog1Opened).toBeTruthy();
  });

  it('should open the modal dialog with form as content on second button click (Open Dialog box 2 button)', () => {
    const buttonElement = fixture.debugElement.nativeElement.querySelector(
      '#open-dialog-btn-2'
    );
    buttonElement.click();
    expect(component.isDialog2Opened).toBeTruthy();
  });

  it('should open the modal dialog with custom component as content on third button (Open Dialog box 3 button)', () => {
    const buttonElement = fixture.debugElement.nativeElement.querySelector(
      '#open-dialog-btn-3'
    );
    buttonElement.click();
    expect(component.isDialog3Opened).toBeTruthy();
  });

  it('should emit onCloseButtonClick event on clicking close icon on modal dialog', () => {
    const dialog = new DialogComponent();
    dialog.onCloseButtonClick.subscribe((openDialog: boolean) => {
      expect(openDialog).toEqual(false);
    });
    expect(component.isDialog1Opened).toBeFalsy();
    expect(component.isDialog2Opened).toBeFalsy();
    expect(component.isDialog3Opened).toBeFalsy();
  });
});
