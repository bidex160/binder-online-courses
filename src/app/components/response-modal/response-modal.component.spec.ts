import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseModalComponent } from './response-modal.component';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

describe('ResponseModalComponent', () => {
  let component: ResponseModalComponent;
  let fixture: ComponentFixture<ResponseModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResponseModalComponent],
      imports: [MatDialogModule],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {},
        },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ResponseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
