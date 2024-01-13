import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponent } from './course.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseComponent],
      imports: [MatIconModule, RouterTestingModule],
    });
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render value of tags in div tag', () => {
    component.course = {
      id: 1,
      courseName: 'Test',
      actualPrice: '4356',
      tags: [1, 2, 3],
      discountPercentage: '10%',
      author: 'Karma',
    };
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#tag > span').innerHTML).toContain(
      component.tags
    );
  });
  it('should check if course is discounted', () => {
    component.course = {
      id: 1,
      courseName: 'Test',
      actualPrice: '4356',
      tags: [1, 2, 3],
      discountPercentage: '10%',
      author: 'Karma',
    };
    fixture.detectChanges();
    expect(component.discounted).toBeTrue();
  });

  it('should check if course is not discounted', () => {
    component.course = {
      id: 1,
      courseName: 'Test',
      actualPrice: '4356',
      tags: [1, 2, 3],
      discountPercentage: '0',
      author: 'Karma',
    };
    fixture.detectChanges();
    expect(component.discounted).toBeFalse();
  });
});
