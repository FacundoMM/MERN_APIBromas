const Joke = require("../models/jokes.model");

module.exports.findAllJoke = (req, res) => {
    Joke.find()
        .then(allDaJoker => res.json({ Jokes: allDaJoker }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};


module.exports.findOneSingleJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneSingleJokes => res.json({ Jokes: oneSingleJokes }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};


module.exports.createNewJokes = (req, res) => {
    Joke.create(req.body)
        .then(newlyCreatedJokes => res.json({ Jokes: newlyCreatedJokes }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};


module.exports.updateExistingJokes = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedJokes => res.json({ Jokes: updatedJokes }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};


module.exports.deleteAnExistingJokes = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}