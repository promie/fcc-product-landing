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
      console.log(`Email is not valid`)
      return
    }

    console.log('Your email is correct and im going to send you an email')
  }

  return { createEmail }
}

module.exports = EmailController
