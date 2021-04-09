import Sequelize from 'sequelize';

const user = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    unique: true,
    validate: {
      notNull: true,
    },
  },
  username: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
};

export default user;
