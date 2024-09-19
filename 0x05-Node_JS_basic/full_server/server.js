import express from 'express';
import handler from './routes';

const app = express();
app.use(handler).listen(1245, () => {
  console.log('Listening on port 1245');
});

export default app;
