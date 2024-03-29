import express from 'express'
import Activity from './Activity.routes.js'
const allRoutes = express.Router()

allRoutes.use('/Activity', Activity)


export default allRoutes