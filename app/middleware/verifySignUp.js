import buildError from '../utilities/errorHelper/errorHelper.js';
import db from '../models/index.js';

const User = db.user;

const checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Username
  User.findOne({
    where: {
      username: req.body.username,
    },
  }).then((user) => {
    if (user) {
      res.status(400).send(buildError(400, ['Username in use']));
      return;
    }

    // Email
    User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((user) => {
      if (user) {
        res.status(400).send(buildError(400, ['Email in use']));
        return;
      }

      next();
    });
  });
};

export default {
  checkDuplicateUsernameOrEmail,
};
