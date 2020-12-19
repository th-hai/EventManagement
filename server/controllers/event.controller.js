const Event = require('../models/Event');

// Get all the events 

const get = async (req, res, next) => {
    Event.find({}, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: 'Your request could not be processed. Please try again.'
            });
        }
        res.status(200).json({
            events: data
        });
    });
}

// Add an event

const create = async (req, res, next) => {
    const event = new Event({
        name: req.body.name,
        type: req.body.type,
        description: req.body.description,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        sponsors: req.body.sponsors,
        category: req.body.category,
        imageUrl: req.body.imageUrl,
        location: req.body.location,
        address: req.body.address,
        speakers: req.body.speakers,
        tickets: req.body.tickets,
        dressCode: req.body.dressCode,
        plannedCost: req.body.plannedCost,
        actualCost: req.body.actualCost
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
   
    const query = {
        _id: req.params.id
    };
    const update = {
        name: req.body.name,
        type: req.body.type,
        description: req.body.description,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        sponsors: req.body.sponsors,
        category: req.body.category,
        imageUrl: req.body.imageUrl,
        location: req.body.location,
        address: req.body.address,
        speakers: req.body.speakers,
        tickets: req.body.tickets,
        dressCode: req.body.dressCode,
        plannedCost: req.body.plannedCost,
        actualCost: req.body.actualCost
    };

    Event.findOneAndUpdate(
        query,
        update,
        {
          new: true
        },
        (err, event) => {
          if (err) {
            return res.status(400).json({
              error: 'Your request could not be processed. Please try again.'
            });
          }
    
          res.status(200).json({
            success: true,
            message: 'Your category is successfully updated!',
            event
          });
        }
      );
}


module.exports = {
    get,
    create,
    getEvent,
    deleteEvent,
    updateEvent
}