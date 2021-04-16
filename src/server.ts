import 'dotenv/config';

import express from 'express';
import session from 'express-session';

declare module 'express-session' {
  interface SessionData {
    user: string;
  }
}

const app = express();
app.disable('x-powered-by');

app.use(
  session({
    secret: process.env.SESSION_SECRET!,
    saveUninitialized: false,
    resave: true,
  }),
);

app.use((req, res, next) => {}, express.static(process.cwd() + '/public'));

app.listen(process.env.PORT, () => {
  console.log(new Date(), '🚀 Server ready!');
});
