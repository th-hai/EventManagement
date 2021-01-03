const Event = require('../models/Event');

// Get all the events 

const getAll = (req, res) => {
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
  };

  
// get a page of event

const get = async (req, res, next) => {
    const limit = 9
    const page = req.params.page || 1

    try {
        // execute query with page and limit values
        const events = await Event.find({},'name type location thumbnail startTime endTime ')
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
        thumbnail: req.body.thumbnail,
        categories: req.body.categories,
        images: req.body.imageUrl,
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
        const removeEvent = await Event.deleteOne({
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
        thumbnail: req.body.thumbnail,
        categories: req.body.categories,
        images: req.body.imageUrl,
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

// Get all tickets by event

const getTicketsByEvent = async (req, res) => {
  try {
    const event = await Event.findOne({ _id: req.params.eventId }).populate('tickets');
    if (event)
        res.send(event.tickets);
  } catch (err) {
    res.send({
        message: err.message
    })
}
}

// Get all categories by event

const getCategoriesByEvent = async (req, res) => {
  try {
    const event = await Event.findOne({ _id: req.params.eventId }).populate('categories');
    if (event)
        res.send(event.categories);
  } catch (err) {
    res.send({
        message: err.message
    })
}
}

// Get all speakers by event

const getSpeakersByEvent = async (req, res) => {
  try {
    const event = await Event.findOne({ _id: req.params.eventId }).populate('speakers');
    if (event)
        res.send(event.speakers);
  } catch (err) {
    res.send({
        message: err.message
    })
}
}
// Get all sponsors by event

const getSponsorsByEvent = async (req, res) => {
  try {
    const event = await Event.findOne({ _id: req.params.eventId }).populate('sponsors');
    if (event)
        res.send(event.sponsors);
  } catch (err) {
    res.send({
        message: err.message
    })
}
}

module.exports = {
    get,
    getAll,
    create,
    getEvent,
    deleteEvent,
    updateEvent,
    getTicketsByEvent,
    getSpeakersByEvent,
    getCategoriesByEvent,
    getSponsorsByEvent
}