const { PreconditionError } = require('../errors')

const EmailController = () => {
  const validateEMail = email => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true
    }
    return false
  }

  const createEmail = (req, res, next) => {
    const { email } = req.body

    if (!validateEMail(email)) {
      return next(PreconditionError('Invalid Email'))
    }

    // Send An Email

    // Send Response to the client
  }

  return { createEmail }
}

module.exports = EmailController
