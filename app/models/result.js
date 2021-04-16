import Sequelize from 'sequelize';

const results = {
  id: {
    primaryKey: true,
    type: Sequelize.INTEGER,
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
