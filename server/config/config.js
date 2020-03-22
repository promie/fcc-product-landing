const dotenv = require('dotenv')

dotenv.config({ path: './config/config.env' })

const config = {
  emailUserName: process.env.EMAIL_USERNAME,
  emailPassword: process.env.EMAIL_PASSWORD,
  emailPort: process.env.EMAIL_PORT,
  emailHost: process.env.EMAIL_HOST
}

module.exports = config
