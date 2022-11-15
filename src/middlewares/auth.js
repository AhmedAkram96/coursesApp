const { UNAUTHORIZED } = require('http-status');

const { extractToken, isAuthenticated } = require('../services/auth');

module.exports = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      throw "you didn't provide any authorization"
    }
    const token = extractToken(req.headers.authorization);
    const decodedToken = await isAuthenticated(token);
    req.decodedToken = decodedToken;
    next();
  } catch (err) {
    return res.status(400).json({
      status: 400,
      message: "Bad Request",
      data: err
    });
  }
};
