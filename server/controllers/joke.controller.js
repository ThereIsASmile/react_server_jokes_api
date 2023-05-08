const Joke = require('../models/joke.model');

module.exports = {
    // CREATE
    createJoke: (req, res) => {
        console.log(req.body)
        Joke.create(req.body)
            .then(newJoke => res.json(newJoke))
            .catch(err => res.status(400).json(err));
    },
    // READ
    getAllJokes: (req, res) => {
        Joke.find()
            .then(allJokes => res.json(allJokes))
            .catch(err => res.json(err));
    },
    // READ ONE
    getOneJoke: (req, res) => {
        Joke.aggregate([{$sample: {size: 1}}])
            .then(randomJoke => res.json(randomJoke))
            .catch(err => res.json(err));
    },
    // READ RANDOM
    randomJoke: (req, res) => {
        Joke.findById(req.params.id)
            .then(oneJoke => res.json(oneJoke))
            .catch(err => res.json(err));
    },
    // UPDATE
    updateJoke: (req, res) => {
        Joke.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(updatedJoke => res.json(updatedJoke))
            .catch(err => res.json(err));
    },
    // DELETE
    deleteJoke: (req, res) => {
        Joke.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    }
}
// There are many different ways to CRUD! The above way is all in one with different methods to make CRUD! find() is find all.
// The below way is one at a time

// module.exports.createjokes = 