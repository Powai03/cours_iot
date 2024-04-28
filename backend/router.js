import express from 'express';
import authRoutes from './routes/authRoutes.js';
import user from './routes/UserRoutes.js';
import iotroute from './routes/iotRoutes.js'

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/user', user);
router.use('/iot',iotroute);


export default router;