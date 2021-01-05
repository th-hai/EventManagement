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
router.use('/events', eventRouter);

// user routes
router.use('/users', userRouter);

// sponsor routes

router.use('/sponsors', sponsorRouter);

// speaker routes

router.use('/speakers', speakerRouter);

// admin routes

//router.use('/admin', adminRouter);

// ticket routes 

router.use('/tickets', ticketRouter);

// category routes

router.use('/categories', categoryRouter);

// upload Routes

router.use('/upload', uploadRouter);

module.exports = router;