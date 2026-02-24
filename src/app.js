const express = require('express');
const app = express();
const ticketRoutes = require('./routes/ticket.routes');

app.use('/api/tickets', ticketRoutes);
app.use("/api/auth", require("./routes/auth.routes"));
app.use(express.json());

const db = require("./models");

db.sequelize.sync()
  .then(() => console.log("Database synced"))
  .catch(err => console.error(err));

app.get('/', (req, res) => {
  res.json({ message: "IT Helpdesk API Running" });
});

module.exports = app;