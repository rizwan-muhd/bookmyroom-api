const jwt = require("jsonwebtoken");
const userSchema = require("../models/User");
const dotenv = require("dotenv");

async function checkToken(req, res, next) {
  try {
    const token = req?.header?.authorization;
    if (!token) {
      return res.status(401).json({
        succes: false,
        message: "no token provided",
      });
    }
    const decoded = jwt.verify(token, "secret");
    const user = await userSchema.findOne({
      email: decoded.email,
      userId: decoded._id,
    });
    if (!user) {
      return res.status(401).json({
        succes: false,
        message: "Unautherised",
      });
    }
    req.user = user;
    return next();
  } catch (error) {
    return res.status(401).json({
      succes: false,
      message: "invalid token",
    });
  }
}

module.exports = checkToken;
