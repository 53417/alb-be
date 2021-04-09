import Sequelize from 'sequelize';
import config from '../config/dbConfig.js';
import roles from './role.js';
import users from './user.js';
import sqlTestUsers from './sqlTestUser.js';
import sqlTestGoogleUsers from './sqlTestGoogleUsers.js';

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: {
    $and: Sequelize.and,
    $or: Sequelize.or,
    $eq: Sequelize.eq,
    $gt: Sequelize.gt,
    $lt: Sequelize.lt,
    $lte: Sequelize.lte,
    $like: Sequelize.like,
  },
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = sequelize.define('users', users);
db.role = sequelize.define('roles', roles);
db.sqlTestUser = sequelize.define('sqlTestUsers', sqlTestUsers);
db.sqlTestGoogleUser = sequelize.define(
  'sqlTestGoogleUsers',
  sqlTestGoogleUsers
);

db.role.hasMany(db.user);
db.user.belongsTo(db.role);

export default db;
