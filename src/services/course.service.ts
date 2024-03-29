import { Injectable } from '@angular/core';
import { NetworkService } from './network.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  coursesSubject: BehaviorSubject<any> = new BehaviorSubject([]);
  constructor(private networkService: NetworkService) {}

  fetchCourses() {
    this.networkService.makeGetRequest('/assets/data.json').subscribe({
      next: (res: any) => {
        this.coursesSubject.next(res);
      },
      error: (er) => {
        this.coursesSubject.next([]);
      },
    });
  }
}
