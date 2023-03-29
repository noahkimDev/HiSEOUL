require("dotenv").config();

const development = {
  username: process.env.USERNAME1,
  password: process.env.PASSWORD,
  database: process.env.SIGNUPDB,
  host: process.env.HOST,
  dialect: "mysql",
};
const test = {
  username: "root",
  password: null,
  database: "database_test",
  host: "127.0.0.1",
  dialect: "mysql",
};
const production = {
  username: "root",
  password: null,
  database: "database_production",
  host: "127.0.0.1",
  dialect: "mysql",
};

export {};
module.exports = { development, test, production };
