import Sequelize from 'sequelize';

const results = {
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
  user_id: {
    type: Sequelize.UUID,
  },
  started_at: {
    type: Sequelize.DATE
  },
  completed_at: {
    type: Sequelize.DATE
  },
  query: {
    type: Sequelize.STRING
  },
  correct: {
    type: Sequelize.BOOLEAN
  }
};

export default results;
