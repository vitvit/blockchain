const ExtendableError = require('es6-error')
const statuses = require('statuses')

class HttpError extends ExtendableError {
  constructor(status, message) {
    if (!message) {
      message = status + ' - ' + statuses[status]
    }
    super(message)
    if (status) {
    	this.status = status
    }
  }

  toJSON() {
    const { status } = this
    return Object.assign({ status }, this)
  }
}

module.exports = HttpError