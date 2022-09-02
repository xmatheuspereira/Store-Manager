const { expect } = require('chai');
const salesModel = require('../../../models/salesModel');

describe('Model: getAll', () => {

  it('Verifica se retorna um array', async () => {
    const response = await salesModel.getAll();
    expect(response).to.be.a('array');
  })

});

describe('Model: getById', () => {

  it('Verifica se retorna um array', async () => {
    const response = await salesModel.getById();
    expect(response).to.be.a('array');
  })

  it('Verifica se retorna sales', async () => {
    const response = await salesModel.getById(1);
    expect(response).to.be.a('array')
  })
  
  it('Verifica se o retorno e um objeto', async () => {
  const [response] = await salesModel.remove(1);
  expect(response).to.be.a('object')
  })
});
