const Event = require('../models/Event');

// Get all the events 

const get = async (req, res, next) => {
    const limit = 10
    const page = req.params.page || 1

    try {
        // execute query with page and limit values
        const events = await Event.find({},'name type address thumbnail startTime endTime')
          .limit(limit * 1)
          .skip((page - 1) * limit)
          .exec();
    
        // get total documents in the Posts collection 
        const count = await Event.countDocuments();
    
        // return response with posts, total pages, and current page
        res.status(200).json({
          events,
          totalPages: Math.ceil(count / limit),
          currentPage: page
        });

      } catch (err) {
        res.status(400).json({
            error: err.message
        });
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
        sponsors: req.body.sponsors,
        category: req.body.category,
        thumbnail: req.body.thumbnail,
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