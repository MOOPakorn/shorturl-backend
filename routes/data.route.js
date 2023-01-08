let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

// Data Model

let Data = require('../models/shorturl')

// Add Url
router.route('/add-url').post((req, res, next) => {
    Data.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// URL list
router.route('/url-list').get((req, res, next) => {
    Data.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})


// Get single URL
router.route('/shortened/:id').get((req, res, next) => {
    Data.findOne({ id: req.params.id }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// Redirect to URL
router.route('/:id').get((req, res, next) => {
    Data.findOne({ short: req.params.id }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            // console.log(data);
            res.redirect(data.full)
            // res.json(data);
        }
    })
})

module.exports = router;