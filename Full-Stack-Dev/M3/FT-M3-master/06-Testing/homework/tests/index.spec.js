const session = require('supertest-session');
const app = require('../index.js'); // Importo el archivo de entrada del server de express.
const { sumArray, pluck } = require('../utils.js')

const agent = session(app);

describe('Test de APIS', () => {
  describe('GET /', () => {
    it('responds with 200', () => agent.get('/').expect(200));
    it('responds with and object with message `hola`', () =>
        agent.get('/').then((res) => {
          expect(res.body.message).toEqual('hola');
        }));
  });

  describe('GET /test', () => {
    it('responds with 200', () => agent.get('/test').expect(200));
    it('responds with and object with message `test`', () =>
      agent.get('/test').then((res) => {
        expect(res.body.message).toEqual('test');
      }));
  });

  describe('POST /sum', () => {
    it('responds with 200', () => agent.post('/sum').expect(200));
    it('responds with the sum of 2 and 3', () =>
      agent.post('/sum')
        .send({a: 2, b: 3})
        .then((res) => {
          expect(res.body.result).toEqual(5);
        })
    );
  });

  describe('POST /producto', () => {
    it('responds with 200', () => agent.post('/product').expect(200));
    it('responds with the product of 2 and 3', () =>
      agent.post('/product')
        .send({a: 2, b: 3})
        .then((res) => {
          expect(res.body.result).toEqual(6);
        })
    );
  });

  describe('POST /sumArray', () => {
    it('responds with 200', () => agent.post('/sumArray').send({array: [2,5,7,10,11,15,20], num: 13}).expect(200));
    it('responds with true if given num is obtained by the sum of two numbers of the array', () =>
      agent.post('/sumArray')
        .send({array: [2,5,7,10,11,15,20], num: 13})
        .then((res) => {
          expect(res.body.result).toEqual(true);
      }));
    it('responds with false if there is no sum of two numbers of array equal to num', () =>
      agent.post('/sumArray')
        .send({array: [2,5,7,10,11,15,20], num: 99})
        .then((res) => {
          expect(res.body.result).toEqual(false);
      }));
      it('responds with false if there is no sum of two numbers of array equal to num', () =>
      agent.post('/sumArray')
        .send({array: [2,5,7,10,11,15,20], num: 4})
        .then((res) => {
          expect(res.body.result).toEqual(false);
      }));
  });

  describe('UTILS sumArray', () => {
    it('responds with true if given num is obtained by the sum of two numbers of the array', () => {
      expect(sumArray([2,5,7,10,11,15,20], 13)).toBe(true)
    });
    it('responds with false if there is no sum of two numbers of array equal to num', () => {
      expect(sumArray([2,5,7,10,11,15,20], 99)).toBe(false)
    });
    it('responds with false if there is no sum of two numbers of array equal to num', () => {
      expect(sumArray([2,5,7,10,11,15,20], 4)).toBe(false)
    });
  })

  describe('GET /numString', () => {
    it('responds with 200', () => agent.get('/numString?q=hola').expect(200));
    it('responds with 400', () => agent.get('/numString').expect(400));
    it('responds with 400', () => agent.get('/numString?q=3').expect(400));
    it('should return 4 if hola is send as string query', () => {
      agent.get('/numString?q=hola')
        .then(res => {
          expect(res.body.result).toBe(4);
        })
    })
    it('should return 6 if franco is send as string query', () => {
      agent.get('/numString?q=franco')
        .then(res => {
          expect(res.body.result).toBe(6);
        })
    })
  })

  describe('POST /pluck', () => {
    var arr = [{name : 'TV', price : 45000}, {name : 'smart phone', price : 30000}];
    var arr2 = "Is not an array";
    it('responds with 200', () => agent.post('/pluck').send({arr, prop : "name"}).expect(200));
    it('responds with 400 if parameters not send', () => {
      agent.post('/pluck').expect(400);
    })
    it('responds with 400 if parm arr is not an array', () => {
      agent.post('/pluck').send({arr2, prop : "name"}).expect(400);
    })
    it('responds with 400 if parm prop is empty', () => {
      agent.post('/pluck').send({arr, prop : ''}).expect(400);
    })
    it('should return only the names if prop is name', () => {
      agent.post('/pluck')
        .send({arr, prop : "name"})
        .then(res => {
          expect(res.body.result).toEqual(['TV', 'smart phone'])
        })
    })
  })

  describe('UTILS pluck', () => {
    var arr = [{name : 'TV', price : 45000}, {name : 'smart phone', price : 30000}]
    it('should return only the names if prop is name', () =>
      expect(pluck(arr, 'name')).toEqual(['TV', 'smart phone']));
    it('should return only the prices if prop is name', () =>
      expect(pluck(arr, 'price')).toEqual([45000, 30000]));
  })

});

