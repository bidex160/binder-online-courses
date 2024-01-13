import { Component, Input, OnInit } from '@angular/core';
import { Course, CourseButton } from '../../../models/course';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrl: './video-card.component.css',
})
export class VideoCardComponent implements OnInit, OnInit {
  /**
   * Video card course contents
   */
  @Input() course: Course | undefined;
  /**
   * Action button's on the video card
   */
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

  /**
   * get if course is discounted
   */
  get discounted() {
    return (
      this.course?.discountPercentage != '0' && this.course?.discountPercentage
    );
  }
  /**
   * check if the course has discount and the coundown is less than 24hrs
   */
  get showCountDown() {
    let h = Math.floor(this.timer / 3600);
    return (
      this.course?.discountPercentage != '0' &&
      this.course?.discountPercentage &&
      h < 24
    );
  }

  /**
   * get time in real time
   */
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

  /**
   * get time left for the discounted price
   */
  get timeLeft() {
    return `${this.form.value.hour} ${
      this.form.value.hour > 1 ? 'hours' : 'hour'
    }  left at this price!`;
  }

  /**
   * update countdown realtime
   * set the updated hour value in form control
   */
  updateTimer() {
    let h = Math.floor(this.timer / 3600);
    this.form.patchValue({ hour: h });
  }

  playVideo() {}

  /**
   * clear interval on screen destroy
   */
  ngOnDestroy(): void {
    if (this.interval) clearInterval(this.interval);
  }
}
