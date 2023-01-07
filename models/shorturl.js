const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let data = new Schema({
    id: {
        type: String
    },
    full: {
        type: String
    },
    short: {
        type: String
    }
}, {
    collection: "datas"
})

module.exports = mongoose.model('Data', data)