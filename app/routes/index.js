import express from 'express';
import userRoutes from './userRoutes.js';
import authRoutes from './authRoutes.js';

const ExpressRoutes = () => {
  const router = express.Router();

  router.use('/auth', authRoutes);
  router.use('/test', userRoutes);

  return router;
};

export default ExpressRoutes();
