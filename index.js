// подключение express
const express = require("express");
const bodyParser = require('body-parser');
const operations = require("./operations");
// создаем объект приложения
const app = express();
// Подключаем body-parser
app.use(bodyParser.json());

// Определяем обработчик корневого урла с методом POST
app.post("/", function (request, response) {

    const { firstArg, secondArg, operation } = request.body; // деструктуризация

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
    } else if (operation === 'per') {//процент
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
        const { statusCode, result, error } = operations.power(firstArg, 2);//возведение в квадрат
        response.status(statusCode).json(result || error);
    } else {
        response.status(400).json('Заданной операции не существует');
    }
});
// начинаем прослушивать подключения на 3000 порту
app.listen(3001);