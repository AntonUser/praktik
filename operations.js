
function addition(firstArg, secondArg) {
    firstArg = Number(firstArg);
    secondArg = Number(secondArg);
    if (Number.isNaN(firstArg) || Number.isNaN(secondArg)) {
        return { statusCode: 400, error: 'Один из аргументов не является числом' };
    }
    return { statusCode: 200, result: firstArg + secondArg };
}

function difference(firstArg, secondArg) {
    firstArg = Number(firstArg);
    secondArg = Number(secondArg);
    if (Number.isNaN(firstArg) || Number.isNaN(secondArg)) {
        return { statusCode: 400, error: 'Один из аргументов не является числом' };
    }
    return { statusCode: 200, result: firstArg - secondArg };
}

function multiplication(firstArg, secondArg) {
    firstArg = Number(firstArg);
    secondArg = Number(secondArg);
    if (Number.isNaN(firstArg) || Number.isNaN(secondArg)) {
        return { statusCode: 400, error: 'Один из аргументов не является числом' };
    }
    return { statusCode: 200, result: firstArg * secondArg };
}

function division(firstArg, secondArg) {
    firstArg = Number(firstArg);
    secondArg = Number(secondArg);
    if (Number.isNaN(firstArg) || Number.isNaN(secondArg)) {
        return { statusCode: 400, error: 'Один из аргументов не является числом' };
    }
    else if (secondArg === 0) {
        return { statusCode: 400, error: 'Деление на ноль невозможно' };
    }
    return { statusCode: 200, result: firstArg / secondArg };
}

function power(firstArg, secondArg) {
    firstArg = Number(firstArg);
    secondArg = Number(secondArg);
    if (Number.isNaN(firstArg) || Number.isNaN(secondArg)) {
        return { statusCode: 400, error: 'Один из аргументов не является числом' };
    }
    return { statusCode: 200, result: Math.pow(firstArg, secondArg) };
}

function sinus(firstArg, unit) {
    firstArg = Number(firstArg);
    if (Number.isNaN(firstArg)) {
        return { statusCode: 400, error: 'Аргумент не является числом' };
    }
    if (unit === 'deg') {//в градусах
        return { statusCode: 200, result: Math.sin(firstArg * Math.PI / 180) };
    } else {//в радианах
        return { statusCode: 200, result: Math.sin(firstArg) };
    }
}

function cosinus(firstArg, unit) {
    firstArg = Number(firstArg);
    if (Number.isNaN(firstArg)) {
        return { statusCode: 400, error: 'Аргумент не является числом' };
    }
    if (unit === 'deg') {//в градусах
        return { statusCode: 200, result: Math.cos(firstArg * Math.PI / 180) };
    } else {//в радианах
        return { statusCode: 200, result: Math.cos(firstArg) };
    }
}

function tangens(firstArg, unit) {

    firstArg = Number(firstArg);
    if (Number.isNaN(firstArg)) {
        return { statusCode: 400, error: 'Аргумент не является числом' };
    }

    if (unit === 'deg') {//в градусах

        if (firstArg === 90 || firstArg === 270) {//валидация исходного значения
            return { statusCode: 400, error: 'Для заданного угла тангенс отсутствует' };
        }
        return { statusCode: 200, result: Math.tan(firstArg * Math.PI / 180) };

    } else {//в радианах

        if (firstArg === (Math.PI / 2) || firstArg === (3 * Math.PI / 2)) {//валидация исходного значения
            return { statusCode: 400, error: 'Для заданного угла тангенс отсутствует' };
        }
        return { statusCode: 200, result: Math.tan(firstArg) };

    }
}

function cotangens(firstArg, unit) {
    firstArg = Number(firstArg);
    if (Number.isNaN(firstArg)) {
        return { statusCode: 400, error: 'Аргумент не является числом' };
    }
    if (unit === 'deg') {//в градусах

        if (firstArg === 90 || firstArg === 270) {//валидация исходного значения
            return { statusCode: 400, error: 'Для заданного угла тангенс отсутствует' };
        }
        return { statusCode: 200, result: 1 / Math.tan(firstArg * Math.PI / 180) };

    } else {//в радианах

        if (firstArg === (Math.PI / 2) || firstArg === (3 * Math.PI / 2)) {//валидация исходного значения
            return { statusCode: 400, error: 'Для заданного угла тангенс отсутствует' };
        }
        return { statusCode: 200, result: 1 / Math.tan(firstArg) };

    }
}

function percent(firstArg, secondArg) {
    firstArg = Number(firstArg);
    secondArg = Number(secondArg);
    if (Number.isNaN(firstArg) || Number.isNaN(secondArg)) {
        return { statusCode: 400, error: 'Один из аргументов не является числом' };
    } else if (secondArg < 0 || secondArg > 100) {
        return { statusCode: 400, error: 'Процент выходит за границы допустимых значений' };
    }
    return { statusCode: 200, result: firstArg * secondArg / 100 };
}

function sqrt(firstArg) {
    firstArg = Number(firstArg);
    if (Number.isNaN(firstArg)) {
        return { statusCode: 400, error: 'Аргумент не является числом' };
    }
    return { statusCode: 200, result: Math.sqrt(firstArg) };
}
module.exports = {
    addition,
    difference,
    multiplication,
    division,
    power,
    sinus,
    cosinus,
    tangens,
    cotangens,
    percent,
    sqrt
};