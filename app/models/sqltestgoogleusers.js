import Sequelize from 'sequelize';

const sqltestgoogleusers = {
  id: {
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  user_id: {
    type: Sequelize.INTEGER,
  },
  browser_language_code: {
    type: Sequelize.STRING,
  },
  created_on: {
    type: Sequelize.DATE,
  },
  device_cat: {
    type: Sequelize.STRING,
  },
};

export default sqltestgoogleusers;
