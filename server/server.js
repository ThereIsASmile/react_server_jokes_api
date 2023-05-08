const express = require('express');
const app = express();
const port = 8000;
require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true}));

const AllMyJokesRoutes = require('./routes/joke.routes');
AllMyJokesRoutes(app);

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
// backticks instead of single quotations