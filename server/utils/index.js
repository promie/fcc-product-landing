const email = require('./email')
const catchAsyncError = require('./catchAsync')

const sendEmail = email
const catchAsync = catchAsyncError

module.exports = {
  catchAsync,
  sendEmail
}
