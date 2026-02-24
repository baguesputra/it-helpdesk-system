const jwt = require("jsonwebtoken");
const { User } = require("../models");
const { hashPassword, comparePassword } = require("../utils/password");
const { secret, expiresIn } = require("../config/jwt");

exports.register = async (data) => {
  const hashed = await hashPassword(data.password);

  const user = await User.create({
    username: data.username,
    email: data.email,
    password_hash: hashed,
    role: data.role || "user"
  });

  return user;
};

exports.login = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  if (!user) throw new Error("User not found");

  const valid = await comparePassword(password, user.password_hash);
  if (!valid) throw new Error("Invalid password");

  const token = jwt.sign(
    { id: user.id, role: user.role },
    secret,
    { expiresIn }
  );

  return { user, token };
};