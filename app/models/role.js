import Sequelize from 'sequelize';

const role = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.INTEGER,
    defaultValue: Sequelize.INTEGER,
    unique: true,
    validate: {
      notNull: true,
    },
  },
  name: {
    type: Sequelize.STRING,
  },
  permissions: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
};

export default role;
