const mongoose = require('mongoose');
 
const JokeSchema = new mongoose.Schema({
    //create a new schema instance with the function mongoose.Schema
    setup: {
        type: String,
        required: [true, "Setup is required."],
        minlength: [10, "Setup must be atleast 2 characters long."],
        maxlength: [255, "Setup cannot be more than 255 characters long."]
        //custom validations for the backend
    },
    punchline: {
        type: String,
        minlength: [3, "Punchline is required."],
        maxlength: [255, "Punchline cannot be more than 255 characters long."]
    }
},
{timestamps: true});
 
// const Joke = mongoose.model('Joke', JokeSchema);
// module.exports = Joke;
// This is the same as writing it below

module.exports = mongoose.model('Joke', JokeSchema);