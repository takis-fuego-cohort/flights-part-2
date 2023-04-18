const Flight = require('../models/flight')

const destinationsController = {
    create: async (req, res) => {
        try{
            // find the flight we want to attach the destination to
            const flight = await Flight.findById(req.params.flight_id)
            // use flight.destinations.push to add the destination form data
            flight.destinations.push(req.body)
            // use flight.save to save the flight to the db
            await flight.save()
            // redirect to the show page of the flight
            res.redirect(`/flights/${flight._id}`)
        }catch(err){
            console.log(err);
            res.send(err)
        }
    },
    show: async (req, res) => {
        // get the destination from the db
        const destination = await Flight.findById(req.params.id)
        // send it to the template
        res.render('destinations/show', {
            destination: destination
        })
    },
    delete: async (req, res) => {
        try{
            const recentlyDeleteFlight = await Flight.findByIdAndDelete(req.params.id)
            res.redirect('/destinations')
        }catch(err){
            res.send(err)
        }
    },
    edit: async (req, res) => {
        try{
            // get the destination from the db
            const destination = await Flight.findById(req.params.id)
            // send the destination to the template
            res.render('destinations/edit', {
                destination: destination
            })
        }catch(err){
            res.send(err)
        }
    },
    update: async (req, res) => {
        try{
            // send req.body to the model for updating
            await Flight.findByIdAndUpdate(req.params.id, req.body)
            res.redirect(`/destinations/${req.params.id}`)
        }catch(err){
            res.send(err)
        }
    }
}

module.exports = destinationsController