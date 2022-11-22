const express = require("express");
const bodyParser = require("body-parser");
const chalk = require("chalk");
const cors = require("cors");
const config = require("config");
const app = express();
const pack = require("../package");
const path = require("path");
const mongoose = require('mongoose');
app.use(cors());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);
app.use(require("express-status-monitor")());

require("./routes")(app);
const dir = path.join(__dirname, "upload");
app.use("/assets", express.static(dir));

app.use(haltOnTimedout);

function haltOnTimedout(req, res, next) {
    if (!req.timedout) next();
}

// mode can be access anywhre in the project
mode = process.env.NODE_ENV;

const start = () =>
    app.listen(config.get(`${mode}.port`, '0.0.0.0'), () => {
        console.log(chalk.yellow(".......................................")); //eslint-disable-line
        console.log(chalk.green(config.get(`${mode}.name`))); //eslint-disable-line
        console.log(chalk.green(`Port:\t\t${config.get(`${mode}.port`)}`)); //eslint-disable-line
        console.log(chalk.green(`Mode:\t\t${config.get(`${mode}.mode`)}`)); //eslint-disable-line
        console.log(chalk.green(`App version:\t${pack.version}`)); //eslint-disable-line
        console.log(chalk.green("database connection is established"));
        console.log(chalk.yellow(".......................................")); //eslint-disable-line
    });

dbConnection = () => {

    mongoose.connect(config.get(`${mode}.database.connection`, {useNewUrlParser: true, useUnifiedTopology: true}))
    app.set("con", mongoose);
    app.set("secret", config.get(`${mode}.secret`))
    start();
};

dbConnection();
