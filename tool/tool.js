const { Pool } = require('pg');

const pool = new Pool({
  user: '',
  host: '',
  database: 'postgres',
  password: '',
  port: 6543,
});

async function runQuery({ query }) {
  try {
    const result = await pool.query(query);
    return JSON.stringify(result.rows);
  } catch (err) {
    return `Error running query: ${err.message}`;
  }
}

module.exports = {
  name: 'run_postgres_query',
  description: 'Run a SQL query on the PostgreSQL database.',
  parameters: {
    type: 'object',
    properties: {
      query: {
        type: 'string',
        description: 'SQL query to run on the database',
      },
    },
    required: ['query'],
  },
  function: runQuery,
};
