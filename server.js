const { PORT } = require("./servidor/config/setting");
const express = require("express");

const app = express();

app.use( express.json(),  express.urlencoded({ extended: true }));

require("./servidor/config/mongoos.config");
const ruterJokes = require("./servidor/routes/jokes.routes");
ruterJokes(app);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));