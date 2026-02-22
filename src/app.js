const express = require('express');
const app = express();
const ticketRoutes = require('./routes/ticket.routes');

app.use('/api/tickets', ticketRoutes);
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: "IT Helpdesk API Running" });
});

module.exports = app;