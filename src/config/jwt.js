module.exports = {
  secret: process.env.JWT_SECRET || "super_secret_key_enterprise",
  expiresIn: "8h"
};