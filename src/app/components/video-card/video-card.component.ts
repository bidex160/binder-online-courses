import { Component, Input, OnInit } from '@angular/core';
import { Course, CourseButton } from '../../../models/course';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrl: './video-card.component.css',
})
export class VideoCardComponent implements OnInit, OnInit {
  @Input() course: Course | undefined;
  @Input() actions: CourseButton[] = [];
  interval: any;
  form: FormGroup = new FormGroup({
    hour: new FormControl(),
  });

  ngOnInit(): void {
    this.updateTimer();
    this.interval = setInterval(() => {
      this.updateTimer();
    }, 1000);
  }

  get discounted() {
    return (
      this.course?.discountPercentage != '0' && this.course?.discountPercentage
    );
  }

  get showCountDown() {
    let h = Math.floor(this.timer / 3600);
    return (
      this.course?.discountPercentage != '0' &&
      this.course?.discountPercentage &&
      h < 24
    );
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

  get timeLeft() {
    return `${this.form.value.hour} ${
      this.form.value.hour > 1 ? 'hours' : 'hour'
    }  left at this price!`;
  }

  updateTimer() {
    let h = Math.floor(this.timer / 3600);
    this.form.patchValue({ hour: h });
  }

  playVideo() {}

  ngOnDestroy(): void {
    if (this.interval) clearInterval(this.interval);
  }
}
