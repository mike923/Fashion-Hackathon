const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session')
const passport = require('./auth/passport')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const designsRouter = require('./routes/designs')

const { seed } = require('./db/seed')
seed()

const app = express();

const sessionConfig = {
    secret: 'NOT_A_GOOD_SECRET',
    resave: false,
    saveUninitialized: true,
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// vvv authentication stuff vvv
app.use(session(sessionConfig))
app.use(passport.initialize())
app.use(passport.session())

app.use('/api', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter);
app.use('/api/design', designsRouter);


module.exports = app;
