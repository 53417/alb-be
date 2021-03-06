import express from 'express';
import authJwt from '../middleware/authJwt.js';
import sqlTestController from '../controllers/sqlTestController.js';

const router = express.Router();

router.get(
  '/executeQuery',
  authJwt.verifyToken,
  sqlTestController.executeQuery
);
router.get('/getQuestion', authJwt.verifyToken, sqlTestController.getQuestion);
router.get(
  '/submitAnswer',
  authJwt.verifyToken,
  sqlTestController.submitAnswer
);

export default router;
