const app = require('./index');
const supertest = require('supertest');
const request = supertest(app);

describe('Two-arguments', () => {
    it('Sum request', () => {
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
});

describe('Two-arguments', () => {
    it('Dif request', () => {
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
});

describe('Two-arguments', () => {
    it('Mul request', () => {
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
});

describe('Two-arguments', () => {
    it('Div request', () => {
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
});

describe('Two-arguments', () => {
    it('Div request zero', () => {
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
});

describe('Two-arguments', () => {
    it('Pow request', () => {
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
});

describe('Two-arguments', () => {
    it('Per request', () => {
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
});

describe('Two-arguments', () => {
    it('Per border request', () => {
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
});

describe('Two-arguments', () => {
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
});

describe('Trigonometry', () => {
    it('Sin request', () => {
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
});

describe('Trigonometry', () => {
    it('Cos request', () => {
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
});

describe('Trigonometry', () => {
    it('Tan request', () => {
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
});

describe('Trigonometry', () => {
    it('Tan forbidden angle', () => {
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
});

describe('Trigonometry', () => {
    it('Tan forbidden angle', () => {
        return request
            .post('/trigonometry')
            .send(
                {
                    firstArg: Math.PI/2,
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
});

describe('Trigonometry', () => {
    it('Ctan request', () => {
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
});

describe('Trigonometry', () => {
    it('Ctan forbidden angle', () => {
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
});

describe('Trigonometry', () => {
    it('Ctan forbidden angle', () => {
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
});

describe('Trigonometry', () => {
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
});

describe('Trigonometry', () => {
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
});

describe('One-arguments', () => {
    it('Sqrt request', () => {
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
});

describe('One-arguments', () => {
    it('Sqr request', () => {
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
});

describe('One-arguments', () => {
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