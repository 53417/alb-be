import db from '../models/index.js';
import deepEqual from '../helpers/deepEqual.js';

const executeQuery = async (req, res) => {
  // execute the users query
  try {
    const { query } = req.query;
    if (!verifyQuery(query)) {
      res.status(200).send('illegal query');
    } else {
      const executedQuery = await db.sequelize.query(query);
      res.status(200).send(executedQuery[0]);
    }
  } catch (err) {
    res.status(200).send(err.message);
  }
};

const getQuestion = (req, res) => {
  // TODO: put questions and schemas into a table
  const body = {
    question:
      'Write a query to get the number of unique Google users whose last login was in July, 2019, broken down by device type. Show the most used device in that period first.',
    schemas: [
      {
        tableName: 'sqltestusers',
        schema: [
          { field: 'user_id', type: 'int', nullable: 'not null' },
          { field: 'is_activated', type: 'boolean', nullable: 'not null' },
          { field: 'last_login', type: 'datetime', nullable: 'nullable' },
          { field: 'signed_up_on', type: 'datetime', nullable: 'nullable' },
          { field: 'sign_up_source', type: 'string', nullable: 'nullable' },
          { field: 'unsubscribed', type: 'tinyint', nullable: 'not null' },
          { field: 'user_type', type: 'tinyint', nullable: 'not null' },
        ],
      },
      {
        tableName: 'sqltestgoogleusers',
        schema: [
          { field: 'id', type: 'int', nullable: 'not null' },
          { field: 'user_id', type: 'int', nullable: 'not null' },
          {
            field: 'browser_language_code',
            type: 'string',
            nullable: 'not null',
          },
          { field: 'created_on', type: 'datetime', nullable: 'not null' },
          { field: 'device_cat', type: 'string', nullable: 'not null' },
        ],
      },
    ],
  };
  res.status(200).send(body);
};

// good enough sql injection protection?
const verifyQuery = (query) => {
  const lower = query.toString().toLowerCase();
  if (
    lower.includes('update') ||
    lower.includes('delete') ||
    lower.includes('insert') ||
    lower.includes('drop') ||
    lower.includes('from user') ||
    lower.includes('from role')
  ) {
    return false;
  } else {
    return true;
  }
};

const checkAnswer = async (req, res) => {
  try {
    const { query } = req.query;
    if (!verifyQuery(query)) {
      res.status(200).send('illegal query');
    } else {
      const executedQuery = await db.sequelize.query(query);
      // TODO: store in a db with sql questions
      const correctQuery = `
      SELECT device_cat, count(device_cat)
      FROM sqltestgoogleusers
      WHERE EXISTS (
          SELECT user_id
          FROM sqltestusers
          WHERE EXTRACT(MONTH FROM last_login) = 7
          AND EXTRACT( YEAR FROM last_login) = 2019
          AND sqltestusers.user_id = sqltestgoogleusers.user_id
      )
      GROUP BY device_cat
      ORDER BY device_cat ASC
    `;
      const executedCorrectQuery = await db.sequelize.query(correctQuery);

      if (deepEqual(executedQuery, executedCorrectQuery)) {
        res.status(200).send(true);
      } else {
        res.status(200).send(false);
      }
    }
  } catch (err) {
    res.status(200).send(false);
  }
};

export default {
  executeQuery,
  getQuestion,
  checkAnswer,
};
