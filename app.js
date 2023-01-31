const express = require('express');
const cors = require('cors');

const contactsRouter = require('./app/routes/contatct.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contact", contactsRouter);

app.get('/', (req, res) => {
    res.json({ message: "Welcome to contact book application."});
})

module.exports = app;