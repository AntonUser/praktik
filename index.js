// подключение express
const express = require("express");
const bodyParser = require('body-parser');
// создаем объект приложения
const app = express();
// Подключаем body-parser
app.use(bodyParser.json());

// Определяем обработчик корневого урла с методом POST
app.post("/", function (request, response) {
    const { firstArg, secondArg, operation } = request.body; // деструктуризация
    if (operation === '+') {
        response.status(200).json(firstArg + secondArg);
    } else if (operation === '-') {
        response.status(200).json(firstArg - secondArg);
    } else if (operation === '/') {
        if (secondArg === 0) {
            response.status(200).json('Деление на 0 невозможно!')
        }
        response.status(200).json(firstArg / secondArg);
    } else if (operation === '*') {
        response.status(200).json(firstArg * secondArg);
    } else if (operation === 'pow') {
        response.status(200).json(Math.pow(firstArg, secondArg));//secondArg - степень
    } else if (operation === 'sin') {
        if (secondArg === 'deg') {
            response.status(200).json(Math.sin(firstArg * Math.PI / 180));//в градусы
        } else {
            response.status(200).json(Math.sin(firstArg));
        }
    } else if (operation === 'cos') {
        if (secondArg === 'deg') {
            response.status(200).json(Math.cos(firstArg * Math.PI / 180));//в градусы
        } else {
            response.status(200).json(Math.cos(firstArg));
        }
    } else if (operation === 'tan') {
        if (secondArg === 'deg') {
            if (firstArg === 90 || firstArg === 270) {
                response.status(200).json('Для заданного угла тангенс отсутствует');
            } else {
                response.status(200).json(Math.tan(firstArg * Math.PI / 180));//в градусы
            }
        } else {
            if (firstArg === (Math.PI / 2) || firstArg === (3 * Math.PI / 2)) {
                response.status(200).json('Для заданного угла тангенс отсутствует');
            } else {
                response.status(200).json(Math.tan(firstArg));
            }
        }

    } else if (operation === 'ctan') {
        if (secondArg === 'deg') {
            if (firstArg === 0 || firstArg === 180 || firstArg === 360) {
                response.status(200).json('Для заданного угла тангенс отсутствует');
            }
            else {
                response.status(200).json((1 / Math.tg(firstArg * Math.PI / 180)));//в градусы
            }
        } else {
            if (firstArg === 0 || firstArg === Math.PI || firstArg === Math.PI * 2) {
                response.status(200).json('Для заданного угла тангенс отсутствует');
            }
            else {
                response.status(200).json(1 / Math.tg(firstArg));
            }
        }
    } else if (operation === 'per') {//процент
        if (secondArg < 0 || secondArg > 100) {
            response.status(200).json('Процент выходит за границы допустимых значений');
        } else {
            response.status(200).json(firstArg * secondArg / 100);
        }
    }
});

app.post("/oneArg", function (request, response) {//с напарником посоветовались, но в итоге не пришли к выводу 
    //правильное ли это решение- отдельный маршрут для операций с одним аргументом
    const { firstArg, operation } = request.body;
    if (operation === 'sqrt') {
        response.status(200).json(Math.sqrt(firstArg));
    } else if (operation === 'sqr') {
        response.status(200).json(Math.pow(firstArg, 2));//возведение в квадрат
    }
});
// начинаем прослушивать подключения на 3000 порту
app.listen(3001);