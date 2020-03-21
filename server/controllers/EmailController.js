const EmailController = () => {
  const createEmail = (req, res, next) => {
    console.log(req.body)
    console.log('POST request for email')
  }

  return { createEmail }
}

module.exports = EmailController
