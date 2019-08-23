export interface Time {
  hour: number;
  minute: number;
}

export interface TimeInfo {
  type: TimeType;
  time: Time;
}

export type TimeType = 'entrance' | 'exit';

export type DrinkCourses = 'soft' | 'alcohol';
