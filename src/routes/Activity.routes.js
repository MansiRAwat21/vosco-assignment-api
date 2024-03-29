import express from 'express';
import {Activity} from '../controllers/Activity.controller.js'

const routers = express.Router();

routers.get('/',Activity)

export default routers