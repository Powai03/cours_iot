import express from 'express';

const router = express.Router();
import { getIot, postIot } from '../controllers/iotController.js';

router.get('/iot', getIot);
router.post('/postIot', postIot);
export default router;