import 'dotenv/config';

import express from 'express';
import session from 'express-session';
import morgan from 'morgan';

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

app.use(morgan('dev'));

app.post('/api/login', express.json(), (req, res, next) => {
  const { account, password } = req.body;

  console.log(account, password);

  if (account === 'admin' && password === '123456') {
    req.session.user = 'admin';
    res.json({ code: 0 });
  } else {
    res.status(401).json({ code: 401 });
  }
});

app.use(express.static(process.cwd() + '/src/public'));

app.use((req, res, next) => {
  if (!req.session.user) {
    res.sendFile(process.cwd() + '/src/index.html');
    return;
  }

  next();
}, express.static(process.cwd() + '/docusaurus/build'));

app.listen(process.env.PORT, () => {
  console.log(new Date(), '🚀 Server ready!');
});
