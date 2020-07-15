const index = require('./index');
const supertest = require('supertest');
const request = supertest(index);

describe('API', () => {
    it('Sum request error', () => {
        return request
            .post('/')
            .send(
                {
                    firstArg: 1,
                    secondArg: "lol",
                    operation: "+"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe('Один из аргументов не является числом');
            });
    });

    it('Sum request with normal arguments', () => {
        return request
            .post('/')
            .send(
                {
                    firstArg: 1,
                    secondArg: "8",
                    operation: "+"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(9);
            });
    });

    it('Dif request error', () => {
        return request
            .post('/')
            .send(
                {
                    firstArg: 1,
                    secondArg: "lol",
                    operation: "-"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe('Один из аргументов не является числом');
            });
    });

    it('Dif request with normal arguments', () => {
        return request
            .post('/')
            .send(
                {
                    firstArg: 20,
                    secondArg: "6",
                    operation: "-"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(14);
            });
    });

    it('Mul request error', () => {
        return request
            .post('/')
            .send(
                {
                    firstArg: 1,
                    secondArg: "lol",
                    operation: "*"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe('Один из аргументов не является числом');
            });
    });

    it('Mul request with normal arguments', () => {
        return request
            .post('/')
            .send(
                {
                    firstArg: 8,
                    secondArg: "8",
                    operation: "*"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(64);
            });
    });

    it('Div request error', () => {
        return request
            .post('/')
            .send(
                {
                    firstArg: 1,
                    secondArg: "lol",
                    operation: "/"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe('Один из аргументов не является числом');
            });
    });

    it('Div request zero error', () => {
        return request
            .post('/')
            .send(
                {
                    firstArg: 1,
                    secondArg: "0",
                    operation: "/"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe('Деление на ноль невозможно');
            });
    });

    it('Div request with normal arguments', () => {
        return request
            .post('/')
            .send(
                {
                    firstArg: 72,
                    secondArg: "8",
                    operation: "/"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(9);
            });
    });

    it('Pow request error', () => {
        return request
            .post('/')
            .send(
                {
                    firstArg: "5",
                    secondArg: "lol",
                    operation: "pow"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe('Один из аргументов не является числом');
            });
    });

    it('Pow request with normal arguments', () => {
        return request
            .post('/')
            .send(
                {
                    firstArg: "4",
                    secondArg: "3",
                    operation: "pow"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(64);
            });
    });

    it('Per request error', () => {
        return request
            .post('/')
            .send(
                {
                    firstArg: "5",
                    secondArg: "lol",
                    operation: "per"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe('Один из аргументов не является числом');
            });
    });

    it('Per request with normal arguments', () => {
        return request
            .post('/')
            .send(
                {
                    firstArg: "100",
                    secondArg: 40,
                    operation: "per"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(40);
            });
    });

    it('Per border error', () => {
        return request
            .post('/')
            .send(
                {
                    firstArg: "5",
                    secondArg: 101,
                    operation: "per"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe('Процент выходит за границы допустимых значений');
            });
    });

    it('Operation not found for /', () => {
        return request
            .post('/')
            .send(
                {
                    firstArg: "5",
                    secondArg: "8",
                    operation: "cas"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe('Заданной операции не существует');
            });
    });

    it('Sin request error', () => {
        return request
            .post('/trigonometry')
            .send(
                {
                    firstArg: "aaa",
                    unit: "deg",
                    operation: "sin"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe('Аргумент не является числом');
            });
    });

    it('Sin request with normal arguments deg', () => {
        return request
            .post('/trigonometry')
            .send(
                {
                    firstArg: 30,
                    unit: "deg",
                    operation: "sin"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(0.49999999999999994);
            });
    });

    it('Sin request with normal arguments rad', () => {
        return request
            .post('/trigonometry')
            .send(
                {
                    firstArg: 60,
                    unit: "",
                    operation: "sin"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(-0.3048106211022167);
            });
    });

    it('Cos request error', () => {
        return request
            .post('/trigonometry')
            .send(
                {
                    firstArg: "aaa",
                    unit: "deg",
                    operation: "cos"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe('Аргумент не является числом');
            });
    });

    it('Cos request with normal arguments deg', () => {
        return request
            .post('/trigonometry')
            .send(
                {
                    firstArg: 60,
                    unit: "deg",
                    operation: "cos"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(0.5000000000000001);
            });
    });

    it('Cos request with normal arguments rad', () => {
        return request
            .post('/trigonometry')
            .send(
                {
                    firstArg: 60,
                    unit: "",
                    operation: "cos"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(-0.9524129804151563);
            });
    });

    it('Tan request error', () => {
        return request
            .post('/trigonometry')
            .send(
                {
                    firstArg: "aaa",
                    unit: "deg",
                    operation: "tan"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe('Аргумент не является числом');
            });
    });

    it('Tan request with normal argument deg', () => {
        return request
            .post('/trigonometry')
            .send(
                {
                    firstArg: 45,
                    unit: "deg",
                    operation: "tan"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(0.9999999999999999);
            });
    });

    it('Tan request with normal argument rad', () => {
        return request
            .post('/trigonometry')
            .send(
                {
                    firstArg: 45,
                    unit: "",
                    operation: "tan"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(1.6197751905438615);
            });
    });

    it('Tan forbidden angle deg', () => {
        return request
            .post('/trigonometry')
            .send(
                {
                    firstArg: "90",
                    unit: "deg",
                    operation: "tan"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe('Для заданного угла тангенс отсутствует');
            });
    });

    it('Tan forbidden angle rad', () => {
        return request
            .post('/trigonometry')
            .send(
                {
                    firstArg: Math.PI / 2,
                    unit: "",
                    operation: "tan"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe('Для заданного угла тангенс отсутствует');
            });
    });

    it('Ctan request error', () => {
        return request
            .post('/trigonometry')
            .send(
                {
                    firstArg: "aaa",
                    unit: "deg",
                    operation: "ctan"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe('Аргумент не является числом');
            });
    });

    it('Ctan request with normal arguments deg', () => {
        return request
            .post('/trigonometry')
            .send(
                {
                    firstArg: "45",
                    unit: "deg",
                    operation: "ctan"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(1.0000000000000002);
            });
    });

    it('Ctan request with normal arguments rad', () => {
        return request
            .post('/trigonometry')
            .send(
                {
                    firstArg: "45",
                    unit: "",
                    operation: "ctan"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(0.6173696237835551);
            });
    });

    it('Ctan forbidden angle deg', () => {
        return request
            .post('/trigonometry')
            .send(
                {
                    firstArg: "180",
                    unit: "deg",
                    operation: "ctan"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe('Для заданного угла тангенс отсутствует');
            });
    });

    it('Ctan forbidden angle rad', () => {
        return request
            .post('/trigonometry')
            .send(
                {
                    firstArg: Math.PI,
                    unit: "",
                    operation: "ctan"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe('Для заданного угла тангенс отсутствует');
            });
    });

    it('Operation not found for /trigonometry', () => {
        return request
            .post('/trigonometry')
            .send(
                {
                    firstArg: "5",
                    unit: "8",
                    operation: "san"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe('Заданной операции не существует');
            });
    });

    it('Sqrt request error', () => {
        return request
            .post('/oneArg')
            .send(
                {
                    firstArg: "ahah",
                    operation: "sqrt"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe('Аргумент не является числом');
            });
    });

    it('Sqrt request with normal argument', () => {
        return request
            .post('/oneArg')
            .send(
                {
                    firstArg: "81",
                    operation: "sqrt"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(9);
            });
    });

    it('Sqr request error', () => {
        return request
            .post('/oneArg')
            .send(
                {
                    firstArg: "ahah",
                    operation: "sqr"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe('Аргумент не является числом');
            });
    });

    it('Sqr request with normal', () => {
        return request
            .post('/oneArg')
            .send(
                {
                    firstArg: 4,
                    operation: "sqr"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(16);
            });
    });

    it('Operation not found for /one-arguments', () => {
        return request
            .post('/oneArg')
            .send(
                {
                    firstArg: "ahah",
                    operation: "qq"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe('Заданной операции не существует');
            });
    });
});