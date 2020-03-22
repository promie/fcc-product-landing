const { PreconditionError } = require('../errors')
const { catchAsync, sendEmail } = require('./../utils')

const EmailController = () => {
  const validateEMail = email => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true
    }
    return false
  }

  const createEmail = catchAsync(async (req, res, next) => {
    const { email } = req.body

    if (!email || !validateEMail(email)) {
      return next(PreconditionError('Invalid Email'))
    }

    const message = `Hi, thank you so much for showing interest in Northstar Fashion. You have now been added to the mailing list
                    for our latest products straight to your inbox ${email}`

    try {
      await sendEmail({
        email,
        subject: 'Thank you for subscribing to Northstar Fashion',
        message
      })

      res.status(200).json({
        status: 'success',
        message: `Email subscription for Northstar Fashion sent to ${email}`
      })
    } catch (err) {
      return next(
        PreconditionError(
          'There was an error sending the email. Please try later!'
        )
      )
    }
  })

  return { createEmail }
}

module.exports = EmailController
