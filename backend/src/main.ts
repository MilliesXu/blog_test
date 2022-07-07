import express from 'express'
import 'dotenv/config'

import log from './utils/logger'
import connectDB from './utils/connect'
import middlewares from './middlewares'
import errorHandler from './middlewares/errorHandler'
import routes from './routes'

const PORT = process.env.PORT || 5000

const app = express()

app.listen(PORT, () => {
  log.info(`Server start in http://localhost:${PORT}`)
  connectDB()

  middlewares(app)
  routes(app)
  app.use(errorHandler)
})
