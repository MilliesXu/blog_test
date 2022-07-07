import { Express } from 'express'
import blogRoute from './blogRoute'

export default(app: Express) => {
  app.use('/api/blog/', blogRoute)
}