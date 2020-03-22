const { PreconditionError } = require('../errors')

const ErrorHandler = () => (error, req, res, next) => {
  const buildErrorItem = (error, statusCode) => {
    return res.status(statusCode).json({
      msg: error.message
    })
  }

  switch (Object.getPrototypeOf(error).constructor) {
    case PreconditionError:
      return buildErrorItem(error, 400)
    default:
      return buildErrorItem(error, 500)
  }
}

module.exports = ErrorHandler
