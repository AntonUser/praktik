const operations = require('./operations');

describe('Calculator functions', () => {
    it('test addition', () => {
        const { statusCode, result } = operations.addition(2, 5);
        expect(result).toBe(7);
        expect(statusCode).toBe(200);
    });

    it('test addition error', () => {
        const { statusCode, error } = operations.addition(2, "dd");
        expect(error).toBe('Один из аргументов не является числом');
        expect(statusCode).toBe(400);
    });

    it('test difference', () => {
        const { statusCode, result } = operations.difference(2, 5);
        expect(result).toBe(-3);
        expect(statusCode).toBe(200);
    });

    it('test difference error', () => {
        const { statusCode, error } = operations.difference(2, "d");
        expect(error).toBe('Один из аргументов не является числом');
        expect(statusCode).toBe(400);
    });

    it('test multiplication', () => {
        const { statusCode, result } = operations.multiplication(2, 5);
        expect(result).toBe(10);
        expect(statusCode).toBe(200);
    });

    it('test multiplication error', () => {
        const { statusCode, error } = operations.multiplication("cc", 5);
        expect(error).toBe('Один из аргументов не является числом');
        expect(statusCode).toBe(400);
    });

    it('test division', () => {
        const { statusCode, result } = operations.division(100, "5");
        expect(result).toBe(20);
        expect(statusCode).toBe(200);
    });

    it('test division error', () => {
        const { statusCode, error } = operations.division(100, "dfvd");
        expect(error).toBe('Один из аргументов не является числом');
        expect(statusCode).toBe(400);
    });

    it('test power', () => {
        const { statusCode, result } = operations.power("5", "2");
        expect(result).toBe(25);
        expect(statusCode).toBe(200);
    });

    it('test power error', () => {
        const { statusCode, error } = operations.power("hhhhc", "2");
        expect(error).toBe('Один из аргументов не является числом');
        expect(statusCode).toBe(400);
    });

    it('test percent', () => {
        const { statusCode, result } = operations.percent("80", "50");
        expect(result).toBe(40);
        expect(statusCode).toBe(200);
    });

    it('test percent border error', () => {
        const { statusCode, error } = operations.percent("80", "51000");
        expect(error).toBe('Процент выходит за границы допустимых значений');
        expect(statusCode).toBe(400);
    });

    it('test percent error', () => {
        const { statusCode, error } = operations.percent("xcv", "50");
        expect(error).toBe('Один из аргументов не является числом');
        expect(statusCode).toBe(400);
    });

    it('test sinus deg', () => {
        const { statusCode, result } = operations.sinus("30", "deg");
        expect(result).toBe(0.49999999999999994);
        expect(statusCode).toBe(200);
    });

    it('test sinus rad', () => {
        const { statusCode, result } = operations.sinus("60", "");
        expect(result).toBe(-0.3048106211022167);
        expect(statusCode).toBe(200);
    });

    it('test sinus error', () => {
        const { statusCode, error } = operations.sinus("dfg", "deg");
        expect(error).toBe('Аргумент не является числом');
        expect(statusCode).toBe(400);
    });

    it('test cosinus deg', () => {
        const { statusCode, result } = operations.cosinus("60", "deg");
        expect(result).toBe(0.5000000000000001);
        expect(statusCode).toBe(200);
    });

    it('test cosinus rad', () => {
        const { statusCode, result } = operations.cosinus("60", "");
        expect(result).toBe(-0.9524129804151563);
        expect(statusCode).toBe(200);
    });

    it('test cosinus error', () => {
        const { statusCode, error } = operations.cosinus("df", "");
        expect(error).toBe('Аргумент не является числом');
        expect(statusCode).toBe(400);
    });

    it('test tangens deg', () => {
        const { statusCode, result } = operations.tangens("45", "deg");
        expect(result).toBe(0.9999999999999999);
        expect(statusCode).toBe(200);
    });

    it('test tangens rad', () => {
        const { statusCode, result } = operations.tangens("45", "");
        expect(result).toBe(1.6197751905438615);
        expect(statusCode).toBe(200);
    });

    it('test tangens error', () => {
        const { statusCode, error } = operations.tangens("sfvs", "");
        expect(error).toBe('Аргумент не является числом');
        expect(statusCode).toBe(400);
    });

    it('test tangens forbidden angle deg', () => {
        const { statusCode, error } = operations.tangens(90, "deg");
        expect(error).toBe('Для заданного угла тангенс отсутствует');
        expect(statusCode).toBe(400);
    });

    it('test tangens forbidden angle rad', () => {
        const { statusCode, error } = operations.tangens(Math.PI / 2, "");
        expect(error).toBe('Для заданного угла тангенс отсутствует');
        expect(statusCode).toBe(400);
    });

    it('test cotangens deg', () => {
        const { statusCode, result } = operations.cotangens("45", "deg");
        expect(result).toBe(1.0000000000000002);
        expect(statusCode).toBe(200);
    });

    it('test cotangens rad', () => {
        const { statusCode, result } = operations.cotangens("45", "");
        expect(result).toBe(0.6173696237835551);
        expect(statusCode).toBe(200);
    });

    it('test cotangens error', () => {
        const { statusCode, error } = operations.cotangens("xc", "deg");
        expect(error).toBe('Аргумент не является числом');
        expect(statusCode).toBe(400);
    });

    it('test cotangens forbidden angle deg', () => {
        const { statusCode, error } = operations.cotangens(180, "deg");
        expect(error).toBe('Для заданного угла тангенс отсутствует');
        expect(statusCode).toBe(400);
    });

    it('test cotangens forbidden angle rad', () => {
        const { statusCode, error } = operations.cotangens(Math.PI, "");
        expect(error).toBe('Для заданного угла тангенс отсутствует');
        expect(statusCode).toBe(400);
    });

    it('test sqrt', () => {
        const { statusCode, result } = operations.sqrt("49");
        expect(result).toBe(7);
        expect(statusCode).toBe(200);
    });

    it('test sqrt error', () => {
        const { statusCode, error } = operations.sqrt("edfwsef");
        expect(error).toBe('Аргумент не является числом');
        expect(statusCode).toBe(400);
    });
});