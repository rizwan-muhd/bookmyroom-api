const userSchema = require("../models/User");

exports.addUser = (req, res) => {
  try {
    const user = userSchema.create({});
  } catch (error) {}
};
