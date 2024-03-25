const JokesController = require("../controllers/jokes.controller");

module.exports = app => {
    app.get("/api/Jokes/", JokesController.findAllJoke);
    app.get("/api/Jokes/:id", JokesController.findOneSingleJoke);
    app.post("/api/Jokes/new", JokesController.createNewJokes);
    app.put("/api/Jokes/update/:id", JokesController.updateExistingJokes);
    app.delete("/api/Jokes/delete/:id", JokesController.deleteAnExistingJokes);
};