const request = require('supertest');
const app = require('../app');

describe ("uploadt POST",()=>{
    it('should upload a file succesfully and return json response', async () => { 
  
        const filePath = `${__dirname}/dog-test.jpg`;
        let res = await request(app).post('/api/fileanalyse')
        .attach('upfile', filePath);
        expect(res.statusCode).toBe(200);
        expect(res.type).toBe("application/json");
      
      });
});
