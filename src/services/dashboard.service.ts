import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'console';
import { NetworkService } from './network.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
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
