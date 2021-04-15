import express from 'express';
import userRoutes from './userRoutes.js';
import authRoutes from './authRoutes.js';
import sqlTestRoutes from './sqlTestRoutes.js';

const ExpressRoutes = () => {
  const router = express.Router();

  router.use('/auth', authRoutes);
  router.use('/test', userRoutes);
  router.use('/sqlTest', sqlTestRoutes);

  return router;
};

export default ExpressRoutes();
