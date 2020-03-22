const dotenv = require('dotenv')

dotenv.config({ path: './config/config.env' })

module.exports = {
  emailUserName: process.env.EMAIL_USERNAME,
  emailPassword: process.env.EMAIL_PASSWORD
}
