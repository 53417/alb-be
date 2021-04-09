import express from 'express';
import authJwt from '../middleware/authJwt.js';
import userController from '../controllers/userController.js';

const router = express.Router();

router.get('/all', userController.allAccess);
router.get('/user', authJwt.verifyToken, userController.userBoard);
router.get(
  '/mod',
  authJwt.verifyToken,
  authJwt.isModerator,
  userController.moderatorBoard
);
router.get(
  '/admin',
  authJwt.verifyToken,
  authJwt.isAdmin,
  userController.adminBoard
);

export default router;

// const userRoutes = (app) => {
//   // app.use(function (req, res, next) {
//   //   res.header(
//   //     'Access-Control-Allow-Headers',
//   //     'x-access-token, Origin, Content-Type, Accept'
//   //   );
//   //   next();
//   // });
//
//   app.get('/api/test/all', userController.allAccess);
//
//   app.get('/api/test/user', [authJwt.verifyToken], userController.userBoard);
//
//   app.get(
//     '/api/test/mod',
//     [authJwt.verifyToken, authJwt.isModerator],
//     userController.moderatorBoard
//   );
//
//   app.get(
//     '/api/test/admin',
//     [authJwt.verifyToken, authJwt.isAdmin],
//     userController.adminBoard
//   );
// };
//
// export default userRoutes
