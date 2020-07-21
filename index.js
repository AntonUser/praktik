const express = require("express");
const bodyParser = require('body-parser');
const operations = require("./operations");

// создаем объект приложения
const app = express();
// Подключаем body-parser
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.get("/", (request, response) => {
    response.sendFile(__dirname + '/public/calculator_320px.html');
});

app.post("/", function (request, response) {

  const { firstArg, secondArg, operation } = request.body;

    if (operation === '+') {
        const { statusCode, result, error } = operations.addition(firstArg, secondArg);
        response.status(statusCode).json(result || error);
    } else if (operation === '-') {
        const { statusCode, result, error } = operations.difference(firstArg, secondArg);
        response.status(statusCode).json(result || error);
    } else if (operation === '/') {
        const { statusCode, result, error } = operations.division(firstArg, secondArg);
        response.status(statusCode).json(result || error);
    } else if (operation === '*') {
        const { statusCode, result, error } = operations.multiplication(firstArg, secondArg);
        response.status(statusCode).json(result || error);
    } else if (operation === 'pow') {
        const { statusCode, result, error } = operations.power(firstArg, secondArg);
        response.status(statusCode).json(result || error);
    } else if (operation === 'per') {
        const { statusCode, result, error } = operations.percent(firstArg, secondArg);
        response.status(statusCode).json(result || error);
    } else {
        response.status(400).json('Заданной операции не существует');
    }
});

app.post("/trigonometry", function (request, response) {
    const { firstArg, unit, operation } = request.body;
    if (operation === 'sin') {
        const { statusCode, result, error } = operations.sinus(firstArg, unit);
        response.status(statusCode).json(result || error);
    } else if (operation === 'cos') {
        const { statusCode, result, error } = operations.cosinus(firstArg, unit);
        response.status(statusCode).json(result || error);
    } else if (operation === 'tan') {
        const { statusCode, result, error } = operations.tangens(firstArg, unit);
        response.status(statusCode).json(result || error);
    } else if (operation === 'ctan') {
        const { statusCode, result, error } = operations.cotangens(firstArg, unit);
        response.status(statusCode).json(result || error);
    } else {
        response.status(400).json('Заданной операции не существует');
    }
});

app.post("/oneArg", function (request, response) {
    const { firstArg, operation } = request.body;
    if (operation === 'sqrt') {
        const { statusCode, result, error } = operations.sqrt(firstArg);
        response.status(statusCode).json(result || error);
    } else if (operation === 'sqr') {
        const { statusCode, result, error } = operations.power(firstArg, 2);
        response.status(statusCode).json(result || 'Аргумент не является числом');
    } else {
        response.status(400).json('Заданной операции не существует');
    }
});
module.exports = app;

app.listen(3001);