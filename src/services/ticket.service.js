const sequelize = require('../config/database');
const Ticket = require('../models/ticket.model');

async function updateTicket(ticketId, data, currentUserId) {
  const transaction = await sequelize.transaction();

  try {

    // SET SESSION VARIABLE FOR TRIGGER
    await sequelize.query(
      `SET app.current_user_id = :userId`,
      {
        replacements: { userId: currentUserId },
        transaction
      }
    );

    await Ticket.update(data, {
      where: { id: ticketId },
      transaction
    });

    await transaction.commit();

    return { message: "Ticket updated successfully" };

  } catch (error) {
    await transaction.rollback();
    throw error;
  }
}

module.exports = { updateTicket };