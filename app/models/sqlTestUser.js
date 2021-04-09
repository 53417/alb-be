import Sequelize from 'sequelize';

const sqlTestUsers = {
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  is_activated: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  signed_up_on: {
    type: Sequelize.DATE,
  },
  sign_up_source: {
    type: Sequelize.STRING,
  },
  unsubscribed: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  user_type: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
};

export default sqlTestUsers;
