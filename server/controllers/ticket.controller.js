const Ticket = require('../models/Ticket');

const create = (req, res) => {
    
    const name = req.body.name;
    const price = req.body.price;
    const ticketType = req.body.ticketType;
    const ticketDetail = req.body.ticketDetail;
    const quantity = req.body.quantity;

    if (!name || !price || !ticketType || !ticketDetail || !quantity) {
      return res
        .status(400)
        .json({ error: 'You must fill out all field.' });
    }
  
    const ticket = new Ticket({
      name: req.body.name,
      price: req.body.price,
      ticketType: req.body.ticketType,
      ticketDetail: req.body.ticketDetail,
      quantity: req.body.quantity
    });
  
    ticket.save((err, data) => {
      if (err) {
        return res.status(400).json({
          error: 'Your request could not be processed. Please try again.'
        });
      }
  
      res.status(200).json({
        success: true,
        message: `Ticket has been added successfully!`,
        ticket: data
      });
    });
  };
  
  // fetch all categories api
 const get = (req, res) => {
    Ticket.find({}, (err, data) => {
      if (err) {
        return res.status(400).json({
          error: 'Your request could not be processed. Please try again.'
        });
      }
      res.status(200).json({
        ticket: data
      });
    });
  };

  const getTicket = async (req, res) => {
    try {
      const ticket = await Ticket.findById(req.params.ticketId);
      if (ticket)
          res.send(ticket);
    } catch (err) {
      res.send({
          message: err.message
      })
    }
  }
  
 const updateTicket = (req, res) => {
    const ticket = req.params.id;
    const query = { _id: ticket };
    const update = { 
        name: req.body.name,
        price: req.body.price,
        ticketType: req.body.ticketType,
        ticketDetail: req.body.ticketDetail,
        quantity: req.body.quantity
    };

  Ticket.findOneAndUpdate(
    query,
    update,
    {
      new: true
    },
    (err, ticket) => {
      if (err) {
        return res.status(400).json({
          error: 'Your request could not be processed. Please try again.'
        });
      }

      res.status(200).json({
        success: true,
        message: 'Your ticket is successfully updated!',
        ticket
      });
    }
  );
}
 

 const deleteTicket = (req, res) => {
      Ticket.deleteOne({ _id: req.params.id }, (err, data) => {
        if (err) {
          return res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
          });
        }
  
        res.status(200).json({
          success: true,
          message: `Ticket has been deleted successfully!`,
          ticket: data
        });
      });
    };

module.exports = {
    create,
    get,
    getTicket,
    updateTicket,
    deleteTicket
}