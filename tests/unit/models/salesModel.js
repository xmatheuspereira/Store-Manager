const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');
const salesModel = require('../../../models/salesModel');

const products = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' }
]

describe('Model: getAll', () => {

  before(async () => {
    const execute = [products];

    sinon.stub(connection, 'execute').resolves(execute);
  })

  after(async () => {
    connection.execute.restore();
  })

  it('Verifica se retorna um array', async () => {
    const response = await salesModel.getAll();
    expect(response).to.be.a('array');
  })

});

describe('Model: getById', () => {

  before(async () => {
    const execute = [products];

    sinon.stub(connection, 'execute').resolves(execute);
  })

  after(async () => {
    connection.execute.restore();
  })

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
