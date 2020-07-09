// подключение express
const express = require("express");
const bodyParser = require('body-parser');
const valid = require("./validate_arguments.js");
// создаем объект приложения
const app = express();
// Подключаем body-parser
app.use(bodyParser.json());

// Определяем обработчик корневого урла с методом POST
app.post("/", function (request, response) {

    const { firstArg, secondArg, operation } = request.body; // деструктуризация

    if (operation === '+') {
        response.status(200).json(valid.validateAdd(firstArg, secondArg));
    } else if (operation === '-') {
        response.status(200).json(valid.validateDiff(firstArg, secondArg));
    } else if (operation === '/') {
        response.status(200).json(valid.validateDiv(firstArg, secondArg));
    } else if (operation === '*') {
        response.status(200).json(valid.validateMul(firstArg, secondArg));
    } else if (operation === 'pow') {
        response.status(200).json(valid.validatePow(firstArg, secondArg));//secondArg - степень
    } else if (operation === 'sin') {
        response.status(200).json(valid.validateSin(firstArg, secondArg));
    } else if (operation === 'cos') {
        response.status(200).json(valid.validateCos(firstArg, secondArg));
    } else if (operation === 'tan') {
        response.status(200).json(valid.validateTan(firstArg, secondArg));
    } else if (operation === 'ctan') {
        response.status(200).json(valid.validateCtan(firstArg, secondArg));
    } else if (operation === 'per') {//процент
        response.status(200).json(valid.validatePer(firstArg, secondArg));
    }
});

app.post("/oneArg", function (request, response) {

    const { firstArg, operation } = request.body;
    
    if (operation === 'sqrt') {
        response.status(200).json(valid.validateSqrt(firstArg));
    } else if (operation === 'sqr') {
        response.status(200).json(valid.validateSqr(firstArg));//возведение в квадрат
    }
    
});
// начинаем прослушивать подключения на 3000 порту
app.listen(3001);