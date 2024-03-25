const { default: mongoose } = require("mongoose")

const JokeSchema = new mongoose.Schema({
    setup: String,
    // {
    //     type: String,
    //     minlength: [10, "Joke must be at least 10 characters longer"]
    // }, 
    punchline: String
    // {
    //   type: String,
    //   minlength: [3, "Punchline must be at least 3 characters longer"]  
    // } 
});

const Jokes = mongoose.model("Broma", JokeSchema);


module.exports = Jokes;