const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');
const salesService = require('../../../services/salesService');
const salesModel = require('../../../models/salesModel');

const products = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' }
]


describe('Service: getAll', () => {
  before(
    async () => {
    const execute = [products];

      sinon
        .stub(connection, 'execute')
        .resolves(execute);
  })

  after(
    async () => {
    connection.
      execute.
      restore();
  })

  it('Verifica se retorna um array', async () => {
    const response = await salesService.getAll();
    expect(response).to.be.a('array');
  })

  
  before(async () =>
  sinon.stub(salesModel, "getById").resolves([])
  );
  
  after(async () => salesModel.getById.restore());
});
