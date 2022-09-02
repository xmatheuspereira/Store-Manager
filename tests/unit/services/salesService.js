const { expect } = require('chai');
const sinon = require('sinon');
const salesService = require('../../../services/salesService');
const salesModel = require('../../../models/salesModel');

describe('Service: getAll', () => {
  
  before(async () =>
  sinon.stub(salesModel, "getById").resolves([])
  );
  
  after(async () => salesModel.getById.restore());

  it('Verifica se retorna um array', async () => {
    const response = await salesService.getAll();
    expect(response).to.be.a('array');
  })

  it('Verifica se retorna uma promise', async () => {
    const response = salesService.getById(0);
    expect(response).to.be.a('promise');
    // kkkkkkkkkkkkkkkkkkkkkkkkk perdao Deus
  })

  
});
