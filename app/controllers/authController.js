import buildError from '../utilities/errorHelper/errorHelper.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import config from '../config/authConfig.js';
import db from '../models/index.js';

const User = db.user;

const signup = (req, res) => {
  // Save User to Database
  try {
    User.create({
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      roleId: 1,
    });
    res.status(200).send(200, 'Registration successful');
  } catch (err) {
    res.status(500).send(buildError(500, [err]));
  }
};

const signin = (req, res) => {
  User.findOne({
    where: {
      username: req.body.username,
    },
  }).then((user) => {
    if (!user) {
      return res
        .status(404)
        .send(buildError(404, ['Invalid username or password']));
    }

    let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

    if (!passwordIsValid) {
      return res
        .status(404)
        .send(buildError(404, ['Invalid username or password']));
    }

    let token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 86400, // 24 hours
    });

    res.status(200).send({
      id: user.id,
      username: user.username,
      email: user.email,
      accessToken: token,
      user: user,
    });
  });
};

export default {
  signin,
  signup,
};
