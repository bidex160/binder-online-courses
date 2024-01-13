import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { EventEmitter } from '@angular/core';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should @Output event on button click in component', () => {
    spyOn(component.mclick, 'emit');
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();
    expect(component.mclick.emit).toHaveBeenCalledWith();
  });
  it('should render value of text in button tag', () => {
    component.text = 'Button';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button').innerHTML).toContain(
      component.text
    );
  });
});
