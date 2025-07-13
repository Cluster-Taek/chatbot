import { InterviewSchedule } from '../models/schedule';
import schedules from '../data/schedules.json';

export const findSchedulesByUserName = (userName: string): InterviewSchedule[] => {
  const userSchedules = schedules.filter(
    (schedule) => schedule.userName.toLowerCase() === userName.toLowerCase()
  );
  return userSchedules;
};