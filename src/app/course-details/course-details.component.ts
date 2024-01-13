import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css',
})
export class CourseDetailsComponent implements OnInit, OnDestroy {
  interval: any;
  constructor() {}

  ngOnInit(): void {
    this.updateTimer();
    this.interval = setInterval(() => {
      this.updateTimer();
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.interval) clearInterval(this.interval);
  }

  get timer() {
    let date = new Date();
    let second = date.getSeconds();
    let minute = date.getMinutes();
    let hour = date.getHours();
    let leftHour = 23 - hour;
    let leftMinute = 59 - minute;
    let leftSeconds = 59 - second;
    return leftHour * 3600 + leftMinute * 60 + leftSeconds;
  }

  updateTimer() {
    let h = Math.floor(this.timer / 3600);
    let m = Math.floor((this.timer - h * 3600) / 60);
    let s = Math.floor(this.timer % 60);
//    console.log(h, m, s);

  }
}
