import Sequelize from 'sequelize';
import config from '../config/dbConfig.js';
import roles from './role.js';
import users from './user.js';
import sqltestusers from './sqltestuser.js';
import sqltestgoogleusers from './sqltestgoogleusers.js';
const sslrootcert = './app/config/ca.pem';

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  port: config.PORT,
  dialect: config.DIALECT,
  native: true,
  ssl: true,
  dialectOptions: {
    ssl: {
      sslmode: 'verify-ca',
      sslrootcert
    }
  },
  // operatorsAliases: {
  //   $and: Sequelize.and,
  //   $or: Sequelize.or,
  //   $eq: Sequelize.eq,
  //   $gt: Sequelize.gt,
  //   $lt: Sequelize.lt,
  //   $lte: Sequelize.lte,
  //   $like: Sequelize.like,
  // },
  // pool: {
  //   max: config.POOL.max,
  //   min: config.POOL.min,
  //   acquire: config.POOL.acquire,
  //   idle: config.POOL.idle,
  // },
});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = sequelize.define('users', users);
db.role = sequelize.define('roles', roles);
db.sqltestuser = sequelize.define('sqltestusers', sqltestusers);
db.sqltestgoogleuser = sequelize.define(
  'sqltestgoogleusers',
  sqltestgoogleusers
);

db.role.hasMany(db.user);
db.user.belongsTo(db.role);

export default db;
