let supertest = require('supertest');
let request = supertest('http://localhost:8080');

test("Aplicação deve responder na porta 8080", () => {

    request.get("/").then(res => expect(res.statusCode).toEqual(200));
})
