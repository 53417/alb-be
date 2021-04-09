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

// const authRoutes = (app) => {
//   // app.use(function (req, res, next) {
//   //   res.header(
//   //     'Access-Control-Allow-Headers',
//   //     'x-access-token, Origin, Content-Type, Accept'
//   //   );
//   //   next();
//   // });
//
//   app.post(
//     '/api/auth/signup',
//     [
//       verifySignUp.checkDuplicateUsernameOrEmail
//     ],
//     authController.signup
//   );
//
//   app.post('/api/auth/signin', authController.signin);
// };
//
// export default authRoutes
