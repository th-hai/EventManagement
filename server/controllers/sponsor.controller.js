const Sponsor = require('../models/Sponsor');

// Get all the speakers 

const get = async (req, res, next) => {
    try {
        const sponsors = await Sponsor.find();
        res.json(sponsors);
    } catch (err) {
        res.json({
            message: err.message
        })
    }
}

// Add a speaker

const create = async (req, res, next) => {
    const sponsor = new Sponsor({
        name: req.body.name,
        logo: req.body.logo,
        description: req.body.description
    });

    try {
        const savedSponsor = await sponsor.save();
        res.json(savedSponsor);
    } catch (err) {
        res.json({
            message: err.message
        })
    }
}

// Get a specific sponsor

const getSponsor = async (req, res, next) => {
    try {
        const sponsor = await Sponsor.findById(req.params.sponsorId);
        if (sponsor)
            res.send(sponsor);
    } catch (err) {
        res.send({
            message: err.message
        })
    }
}

// Delete an sponsor

const deleteSponsor = async (req, res, next) => {
    try {
        const removeSponsor = await Sponsor.remove({
            _id: req.params.sponsorId
        })
        res.json(removeSponsor);
    } catch (error) {
        res.json({
            message: error
        })
    }
}

const updateSponsor = async (req, res, next) => {
    try {
        const updatedSponsor = await Sponsor.updateOne({
            _id: req.params.sponsorId
        }, {
            $set: {
                name: req.body.name,
                logo: req.body.logo,
                description: req.body.description
            }
        })
        res.json(updatedSponsor);
    } catch (error) {
        res.json({
            message: error
        })
    }
}


module.exports = {
    get,
    create,
    getSponsor,
    deleteSponsor,
    updateSponsor
}