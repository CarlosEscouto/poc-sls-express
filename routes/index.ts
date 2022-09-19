import express from 'express';
import { UserRoutes } from './UserRoute';

const router = express.Router();

router.use('/users', UserRoutes)

export default router