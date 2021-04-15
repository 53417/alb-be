import express from 'express';
import verifySignUp from '../middleware/verifySignUp.js';
import authController from '../controllers/authController.js';

const router = express.Router();

router.post(
  '/signup',
  verifySignUp.checkDuplicateUsernameOrEmail,
  authController.signup
);
router.post('/signin', authController.signin);

export default router;
