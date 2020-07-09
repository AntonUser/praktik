
function addition(firstArg, secondArg) {
    firstArg = Number(firstArg);
    secondArg = Number(secondArg)
    if (Number.isNaN(firstArg) || Number.isNaN(secondArg)) {
        return { statusCode: 400, error: 'Один из аргументов не является числом' }
    }
    return { statusCode: 200, result: firstArg + secondArg };
}

function difference(firstArg, secondArg) {
    return firstArg - secondArg;
}

function multiplication(firstArg, secondArg) {
    return firstArg * secondArg;
}

function division(firstArg, secondArg) {
    return firstArg / secondArg;
}

function power(firstArg, secondArg) {
    return Math.pow(firstArg, secondArg);
}

function sinusDeg(firstArg) {
    return Math.sin(firstArg * Math.PI / 180);
}

function sinusRad(firstArg) {
    return Math.sin(firstArg);
}

function cosinusDeg(firstArg) {
    return Math.cos(firstArg * Math.PI / 180);
}

function cosinusRad(firstArg) {
    return Math.cos(firstArg);
}

function tangensDeg(firstArg) {
    return Math.tan(firstArg * Math.PI / 180);
}

function tangensRad(firstArg) {
    return Math.tan(firstArg);
}

function percent(firstArg, secondArg) {
    return firstArg * secondArg / 100;
}

function sqrt(firstArg) {
    return Math.sqrt(firstArg);
}
module.exports = {
    addition,
    difference: difference,
    multiplication: multiplication,
    division: division,
    power: power,
    sinusDeg: sinusDeg,
    sinusRad: sinusRad,
    cosinusDeg: cosinusDeg,
    cosinusRad: cosinusRad,
    tangensDeg: tangensDeg,
    tangensRad: tangensRad,
    percent: percent,
    sqrt: sqrt
};