import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './app/routes/index.js';

const app = express();

// front end
// let corsOptions = {
//   origin: 'https://alb-fe.herokuapp.com/',
// };
app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// database
import db from './app/models/index.js';
db.sequelize.sync();

// routes
app.use('/api', routes);

// set port, listen for requests
const PORT = process.env.PORT || 53416;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
