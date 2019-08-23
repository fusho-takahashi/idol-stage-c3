import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Time, DrinkCourses, TimeInfo } from '../domain/models';

@Injectable({
  providedIn: 'root',
})
export class TimeService {
  private _entranceTime$ = new BehaviorSubject<Time>(null);
  private _exitTime$ = new BehaviorSubject<Time>(null);
  private _drinkCourse$ = new BehaviorSubject<DrinkCourses>('soft');

  get entranceTime$() {
    return this._entranceTime$.asObservable();
  }

  get exitTime$() {
    return this._exitTime$.asObservable();
  }

  get drinkCourse$() {
    return this._drinkCourse$.asObservable();
  }

  constructor() {}

  updateTime(timeInfo: TimeInfo) {
    switch (timeInfo.type) {
      case 'entrance':
        this.updateEntranceTime(timeInfo.time);
        break;
      case 'exit':
        this.updateExitTime(timeInfo.time);
    }
  }

  private updateEntranceTime(time: Time) {
    this._entranceTime$.next({ ...time });
  }

  private updateExitTime(time: Time) {
    this._exitTime$.next({ ...time });
  }

  updateDrinkCourse(course: DrinkCourses) {
    this._drinkCourse$.next(course);
  }
}
