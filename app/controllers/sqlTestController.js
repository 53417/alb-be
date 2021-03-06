import db from '../models/index.js';
import deepEqual from '../helpers/deepEqual.js';
import buildError from '../utilities/errorHelper/errorHelper.js';

const Result = db.result;

const executeQuery = async (req, res) => {
  // execute the users query
  try {
    const { query } = req.query;
    if (!verifyQuery(query)) {
      res.status(200).send('illegal query');
    }

    const executedQuery = await db.sequelize.query(query);
    const isQueryCorrect = await checkAnswer(executedQuery);
    res.status(200).send({
      queryResult: executedQuery[0],
      correct: isQueryCorrect,
    });
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
    lower.includes('create') ||
    lower.includes('update') ||
    lower.includes('delete') ||
    lower.includes('insert') ||
    lower.includes('drop') ||
    lower.includes('from user') ||
    lower.includes('from role') ||
    lower.includes('from result')
  ) {
    return false;
  } else {
    return true;
  }
};

const checkAnswer = async (queryResultToBeChecked) => {
  try {
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

    if (deepEqual(queryResultToBeChecked, executedCorrectQuery)) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    throw err;
  }
};

const submitAnswer = async (req, res) => {
  try {
    const newResult = {
      user_id: req.userId,
      started_at: req.query.startTime || null,
      completed_at: req.query.endTime || null,
      query: req.query.query || null,
      correct: req.query.correct || false,
    };
    await Result.create(newResult);
    res.status(200).send('Result successfully recorded');
  } catch (err) {
    res.status(500).send(buildError(500, [err]));
  }
};

export default {
  executeQuery,
  getQuestion,
  submitAnswer,
};
