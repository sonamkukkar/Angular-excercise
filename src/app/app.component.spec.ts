import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
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

  it('should render title', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content h1').textContent).toContain(
      'Dialog Boxes'
    );
  });

  it('all modal dialogs should be hidden by default', () => {
    expect(component.isDialog1Opened).not.toBeTruthy();
    expect(component.isDialog2Opened).not.toBeTruthy();
    expect(component.isDialog3Opened).not.toBeTruthy();
  });

  it('should open the modal dialog on Open Dialog button click', () => {
    let buttonElement = fixture.debugElement.nativeElement.querySelector(
      '#open-dialog-btn-1'
    );
    buttonElement.click();
    expect(component.isDialog1Opened).toBeTruthy();
  });
});
