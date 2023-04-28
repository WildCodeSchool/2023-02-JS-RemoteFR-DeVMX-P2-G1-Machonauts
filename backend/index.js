require("dotenv").config();

const mysql = require("mysql2");

const app = require("./src/app");

const port = parseInt(process.env.APP_PORT ?? "5000", 10);

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const connection = mysql.createConnection({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

function getPlanets(req, res) {
  const { planet } = req.params || null;
  const sql = planet
    ? "SELECT title, description FROM planet WHERE name_id = ?"
    : "SELECT name_id, title FROM planet";
  const preparedStatements = planet ? [planet] : [];
  connection
    .promise()
    .query(sql, preparedStatements)
    .then(([result]) => {
      if (result.length) {
        if (planet) res.json(result[0]);
        else res.json(result);
      } else res.status(404).send("The planet requested has not been found.");
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("An error occurred on the database.");
    });
}

app.get("/planets", getPlanets);
app.get("/planets/:planet", getPlanets);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    // eslint-disable-next-line no-restricted-syntax
    console.log(`Server is listening on ${port}`);
  }
});
