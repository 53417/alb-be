export default {
  HOST: 'localhost',
  USER: 'local',
  PASSWORD: 'local',
  DB: 'booka',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
