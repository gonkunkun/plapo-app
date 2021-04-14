import express from 'express';
import healthCheck from './healthCheck';

const router = express.Router();

// v1以下のルーティング
router.use('/healthcheck', healthCheck);

export default router;
