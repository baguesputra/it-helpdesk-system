const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Ticket = sequelize.define('Ticket', {
  ticket_code: {
    type: DataTypes.STRING,
    unique: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING
  },
  user_id: DataTypes.INTEGER,
  assigned_to: DataTypes.INTEGER,
  category_id: DataTypes.INTEGER,
  priority_id: DataTypes.INTEGER,
  department_id: DataTypes.INTEGER,
  due_date: DataTypes.DATE
}, {
  tableName: 'tickets',
  timestamps: false
});

module.exports = Ticket;