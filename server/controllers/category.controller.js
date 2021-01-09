const Category = require('../models/Category');

const create = (req, res) => {
  const name = req.body.name;
  const description = req.body.description;

  if (!description || !name) {
    return res
      .status(400)
      .json({
        error: 'You must enter description & name.'
      });
  }

  const category = new Category({
    name,
    description
  });

  category.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: 'Your request could not be processed. Please try again.'
      });
    }

    res.status(200).json({
      success: true,
      message: `Category has been added successfully!`,
      category: data
    });
  });
};

// fetch all categories api
const get = (req, res) => {
  Category.find({}, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: 'Your request could not be processed. Please try again.'
      });
    }
    res.status(200).json({
      categories: data
    });
  });
};

const getCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (category)
      res.send(category);
  } catch (err) {
    res.send({
      message: err.message
    })
  }
}
const updateCategory = (req, res) => {
  const category = req.params.id;
  const query = {
    _id: category
  };
  const update = {
    name: req.body.name,
    description: req.body.description
  };

  Category.findOneAndUpdate(
    query,
    update, {
      new: true
    },
    (err, category) => {
      if (err) {
        return res.status(400).json({
          error: 'Your request could not be processed. Please try again.'
        });
      }

      res.status(200).json({
        success: true,
        message: 'Your category is successfully updated!',
        category
      });
    }
  );
}


const deleteCategory = (req, res) => {
  Category.deleteOne({
    _id: req.params.id
  }, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: 'Your request could not be processed. Please try again.'
      });
    }

    res.status(200).json({
      success: true,
      message: `Category has been deleted successfully!`,
      category: data
    });
  });
};

const getEventsByCategory = async (req, res) => {
  try {
    const event = await Category.findOne({
      _id: req.params.id
    }).populate('events');
    if (event)
      res.send(event);
  } catch (err) {
    res.send({
      message: err.message
    })
  }
}

module.exports = {
  create,
  get,
  getCategory,
  updateCategory,
  deleteCategory,
  getEventsByCategory
}