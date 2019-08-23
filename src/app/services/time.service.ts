import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Time, DrinkCourses } from '../domain/models';

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

  updateEntranceTime(time: Time) {
    this._entranceTime$.next({ ...time });
  }

  updateExitTime(time: Time) {
    this._exitTime$.next({ ...time });
  }

  updateDrinkCourse(course: DrinkCourses) {
    this._drinkCourse$.next(course);
  }
}
