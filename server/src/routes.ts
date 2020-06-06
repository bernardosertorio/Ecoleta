import express from "express"
import { celebrate, Joi} from 'celebrate'


import multer from 'multer'
import multerConfig from './config/multer'

import PointsController from './controllers/PointsControllers'
import ItemsController from './controllers/ItemsController'


const routes = express.Router()
const upload = multer(multerConfig)


const pointsController = new PointsController()
const itemscontroller = new ItemsController()


routes.get('/items', itemscontroller.index);
routes.get('/points', pointsController.index)
routes.get('/points/:id', pointsController.show)


routes.post(
  '/points', 
  upload.single('image'),
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required(),
      whatsapp: Joi.number().required(),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      city: Joi.string().required(),
      uf: Joi.string().required().max(2),
      items: Joi.string().required(),
    })
  }, {
    abortEarly: false
  }), 
  pointsController.create )



export default routes;