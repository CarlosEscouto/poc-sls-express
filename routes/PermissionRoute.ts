import express from 'express';
import * as UserController from '../src/presentation/controllers/UserController';

const UserRoutes = express.Router();

UserRoutes.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

UserRoutes.get('/', UserController.index);
UserRoutes.post('/', UserController.create)

export { UserRoutes }