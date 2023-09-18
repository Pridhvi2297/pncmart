const Errorhandler = require("../utils/ErrorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal server Error";

  if (err.name === "CastError") {
    const message = `Resources not found this id.. Invalid ${err.path}`;
    err = new Errorhandler(message, 400);
  }

  if (err.code === 11000) {
    const message = `Duplicate key ${Object.keys(err.keyValue)} Entered`;
    err = new Errorhandler(message, 400);
  }

  if (err.name === "JsonWebTokenError") {
    const message = `Your URL is invalid please try again later`;
    err = new Errorhandler(message, 400);
  }

  if (err.name === "TokenExpiredError") {
    const message = `Your URL is expired please try again later`;
    err = new Errorhandler(message, 400);
  }

  res.status(err.statusCode).json({
    sucess: false,
    message: err.message,
  });
};
