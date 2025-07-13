import { Request, Response } from 'express';
import { findSchedulesByUserName } from '../services/scheduleService';

export const getSchedulesByUserName = (req: Request, res: Response) => {
  const { userName } = req.params;
  const schedules = findSchedulesByUserName(userName);

  if (schedules.length === 0) {
    return res.status(404).json({ message: '해당 사용자의 스케줄을 찾을 수 없습니다.' });
  }

  res.json(schedules);
};