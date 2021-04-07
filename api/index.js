const express = require('express')
const cors = require('cors')
// Create express instance
const app = express()

// Require API routes
const users = require('./routes/users')

// CORS-enabled for all origins
// http://expressjs.com/en/resources/middleware/cors.html
app.use(cors())

// Import API Routes
app.use(users)

// Export express app
module.exports = app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`)
  })
}
