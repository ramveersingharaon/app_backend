const jwt = require("jsonwebtoken");
const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(400).json({
        success: false,
        message: "please Login access this resourse ",
      });
    }

    jwt.verify(token, process.env.JWT_SECRET, function (err, decode) {
      if (err) {
        return res.status(400).json({
          success: false,
          message: "invalid token",
        });
      }

      if (decode) {
        req.body.userId = decode.userId;
      }
      next();
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = auth;
