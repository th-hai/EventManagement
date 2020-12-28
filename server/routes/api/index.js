const router = require('express').Router();

const eventRouter = require('./event');
const userRouter = require('./user');
const authRouter = require('./auth');
const sponsorRouter = require('./sponsor');
const categoryRouter = require('./category');
const speakerRouter = require('./speaker');
const ticketRouter = require('./ticket');
const uploadRouter = require('./upload');
const adminRouter = require('./admin');

// auth routes
router.use('/event', eventRouter);

// user routes
router.use('/user', userRouter);

// sponsor routes

router.use('/sponsor', sponsorRouter);

// speaker routes

router.use('/speaker', speakerRouter);

// admin routes

//router.use('/admin', adminRouter);

// ticket routes 

router.use('/ticket', ticketRouter);

module.exports = router;