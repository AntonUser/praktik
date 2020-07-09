const operation = require("./operations.js");

function validateDiff(firstArg, secondArg) {

    if (typeof (firstArg + secondArg) === "string") {
        return "Ошибка! Один из аргументов не число";
    }
    return operation.difference(firstArg, secondArg);

}

function validateDiv(firstArg, secondArg) {

    if (typeof (firstArg + secondArg) === "string") {
        return "Ошибка! Один из аргументов не число";
    }
    if (secondArg === 0) {
        return 'Деление на 0 невозможно!';
    }
    return operation.division(firstArg, secondArg);

}

function validateMul(firstArg, secondArg) {

    if (typeof (firstArg + secondArg) === "string") {
        return "Ошибка! Один из аргументов не число";
    }
    return operation.multiplication(firstArg, secondArg);

}

function validatePow(firstArg, secondArg) {

    if (typeof (firstArg + secondArg) === "string") {
        return "Ошибка! Один из аргументов не число";
    }
    return operation.power(firstArg, secondArg);

}

function validateSin(firstArg, secondArg) {

    if (typeof (firstArg) === "string") {
        return "Ошибка! Первый аргумент не число";
    }

    if (secondArg === 'deg') {//в градусах
        return operation.sinusDeg(firstArg);
    } else {//в радианах
        return operation.sinusRad(firstArg);
    }

}

function validateCos(firstArg, secondArg) {

    if (typeof (firstArg) === "string") {
        return "Ошибка! Первый аргумент не число";
    }

    if (secondArg === 'deg') {//в градусах
        return operation.cosinusDeg(firstArg);
    } else {//в радианах
        return operation.cosinusRad(firstArg);
    }

}

function validateTan(firstArg, secondArg) {

    if (typeof (firstArg) === "string") {
        return "Ошибка! Первый аргумент не число";
    }

    if (secondArg === 'deg') {//в градусах

        if (firstArg === 90 || firstArg === 270) {//валидация исходного значения
            return 'Для заданного угла тангенс отсутствует';
        }
        return operation.tangensDeg(firstArg);

    } else {//в радианах

        if (firstArg === (Math.PI / 2) || firstArg === (3 * Math.PI / 2)) {//валидация исходного значения
            return 'Для заданного угла тангенс отсутствует';
        }

        return operation.tangensRad(firstArg);
    }

}

function validateCtan(firstArg, secondArg) {

    if (typeof (firstArg) === "string") {
        return "Ошибка! Первый аргумент не число";
    }

    if (secondArg === 'deg') {//в градусах
        if (firstArg === 0 || firstArg === 180 || firstArg === 360) {
            return 'Для заданного угла тангенс отсутствует';
        }
        return 1 / operation.tangensDeg(firstArg);
    } else {//в радианах
        if (firstArg === 0 || firstArg === Math.PI || firstArg === Math.PI * 2) {
            response.status(200).json('Для заданного угла тангенс отсутствует');
        }
        return 1 / operation.tangensRad(firstArg);
    }

}

function validatePer(firstArg, secondArg) {

    if (typeof (firstArg + secondArg) === "string") {//валидация типа переменных
        return "Ошибка! Один из аргументов не число";
    }

    if (secondArg < 0 || secondArg > 100) {
        response.status(200).json('Процент выходит за границы допустимых значений');
    }

    return operation.percent(firstArg, secondArg);

}

function validateSqrt(firstArg) {
    if (typeof (firstArg) === "string") {
        return "Ошибка! Аргумент не число";
    }
    return operation.sqrt(firstArg);
}

function validateSqr(firstArg) {
    if (typeof (firstArg) === "string") {
        return "Ошибка! Аргумент не число";
    }
    return operation.power(firstArg, 2);
}

module.exports = {
    validateDiff: validateDiff,
    validateDiv: validateDiv,
    validateMul: validateMul,
    validatePow: validatePow,
    validateSin: validateSin,
    validateCos: validateCos,
    validateTan: validateTan,
    validateCtan: validateCtan,
    validatePer: validatePer,
    validateSqrt: validateSqrt,
    validateSqr: validateSqr
};