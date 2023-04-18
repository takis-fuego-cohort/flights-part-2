const mongoose = require('mongoose')
const destinationSchema = new mongoose.Schema({
    airport: {
        type: String,
        enum: ['DEN', 'ORD', 'SFO'],
        default: 'ORD'
    },
    arrival: {
        type: Date,
    }
})
const flightSchema = new mongoose.Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United', 'JetBlue'],
    },
    airport: {
        type: String,
        enum: ['DEN', 'ORD', 'SFO'],
        default: 'DEN'
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        required: true
    },
    departs: {
        type: Date,
        default: new Date().setFullYear(new Date().getFullYear() + 1)
    },
    destinations: [destinationSchema]
    // One-To-Many Relationship
    // One-To-One Relationship
    // Many-To-Many Relationship
})

const Flight = mongoose.model('Flight', flightSchema);
module.exports = Flight;