const Event = require('../models/Event');

// Get all the events 

const get = async (req, res, next) => {
    try {
        const events = await Event.find();
        console.log(events);
        res.json(events);
    } catch (err) {
        res.json({
            message: err.message
        })
    }
}

// Add an event

const create = async (req, res, next) => {
    const event = new Event({
        name: req.body.name,
        type: req.body.type,
        description: req.body.description,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        sponsorId: req.body.sponsorId,
        categoryId: req.body.categoryId,
        imageUrl: req.body.imageUrl,
        location: req.body.location,
        address: req.body.address

    });

    try {
        const savedEvent = await event.save();
        res.json(savedEvent);
    } catch (err) {
        res.json({
            message: err.message
        })
    }
}

// Get a specific event

const getEvent = async (req, res, next) => {
    try {
        const event = await Event.findById(req.params.eventId);
        if (event)
            res.send(event);
    } catch (err) {
        res.send({
            message: err.message
        })
    }
}

// Delete an event

const deleteEvent = async (req, res, next) => {
    try {
        const removeEvent = await Event.remove({
            _id: req.params.eventId
        })
        res.json(removeEvent);
    } catch (error) {
        res.json({
            message: error
        })
    }
}

const updateEvent = async (req, res, next) => {
    try {
        const updatedEvent = await Event.updateOne({
            _id: req.params.eventId
        }, {
            $set: {
                name: req.body.name,
                type: req.body.type,
                description: req.body.description,
                date: req.body.date,
                sponsorId: req.body.sponsorId,
                categoryId: req.body.categoryId,
                imageCollectionId: req.body.imageCollectionId
            }
        })
        res.json(updatedEvent);
    } catch (error) {
        res.json({
            message: error
        })
    }
}


module.exports = {
    get,
    create,
    getEvent,
    deleteEvent,
    updateEvent
}