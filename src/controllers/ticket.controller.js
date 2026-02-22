const { updateTicket } = require('../services/ticket.service');

async function update(req, res) {
  try {
    const ticketId = req.params.id;
    const currentUserId = 2; // nanti ambil dari JWT
    const result = await updateTicket(ticketId, req.body, currentUserId);

    res.json(result);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { update };