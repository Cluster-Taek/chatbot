import { Router } from 'express';
import { getSchedulesByUserName } from '../controllers/scheduleController';

const router = Router();

router.get('/:userName', getSchedulesByUserName);

export default router;