const jwt = require('jsonwebtoken')
const User = require("../models/userModel.js");
const asyncHandler = require("express-async-handler");

const authMiddleware = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      //decodes token id
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(400).json({message:"Invalid Auth Token"})
    }
  }

  if (!token) {
    res.status(401).json({message:"Token Not Found"})

  }
});

module.exports = { authMiddleware };