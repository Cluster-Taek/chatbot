import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = 3000;

import scheduleRoutes from './routes/scheduleRoutes';

app.use('/api/schedules', scheduleRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World! This is the schedule management chatbot server.');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
}); 