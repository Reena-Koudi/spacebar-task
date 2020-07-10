import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { By } from '@angular/platform-browser';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Set Button Text to Something', () => {
    const defaultButtonText = 'Something';
    component.label = defaultButtonText;
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('.btn'));
    expect(button.nativeElement.textContent.trim()).toBe(defaultButtonText);
  });
});
