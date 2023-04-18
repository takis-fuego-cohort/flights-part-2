const Flight = require('../models/flight')

const flightsController = {
    index: async (req, res)=>{
        // Get the flights from the database
        const flights = await Flight.find();   
        // Put them into the template
        res.render('flights/index', {
            flights: flights
        })
    },
    new: (req, res) => {
        res.render('flights/new')
    },
    create: async (req, res) => {
        try{
            const newFlight = await Flight.create(req.body)
            res.redirect(`/flights/${newFlight._id}`)
        }catch(err){
            console.log(err);
            res.send(err)
        }
    },
    show: async (req, res) => {
        // get the flight from the db
        const flight = await Flight.findById(req.params.id)
        // send it to the template
        res.render('flights/show', {
            flight: flight
        })
    },
    delete: async (req, res) => {
        try{
            const recentlyDeleteFlight = await Flight.findByIdAndDelete(req.params.id)
            res.redirect('/flights')
        }catch(err){
            res.send(err)
        }
    },
    edit: async (req, res) => {
        try{
            // get the flight from the db
            const flight = await Flight.findById(req.params.id)
            // send the flight to the template
            res.render('flights/edit', {
                flight: flight
            })
        }catch(err){
            res.send(err)
        }
    },
    update: async (req, res) => {
        try{
            // send req.body to the model for updating
            await Flight.findByIdAndUpdate(req.params.id, req.body)
            res.redirect(`/flights/${req.params.id}`)
        }catch(err){
            res.send(err)
        }
    }
}

module.exports = flightsController