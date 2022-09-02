const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');
const productsModel = require('../../../models/productsModel');

const prod = [
  { id: 1, name: 'Prod 1' },
  { id: 2, name: 'Prod 2' },
  { id: 3, name: 'Prod 3' }
]

describe('Model: getAll', () => {

  before(async () => {
    const execute = [prod];

    sinon.stub(connection, 'execute').resolves(execute);
  })

  after(async () => {
    connection.execute.restore();
  })

  it('Verifica se retorna um array', async () => {
    const response = await productsModel.getAll();
    expect(response).to.be.a('array');
  })

  it('Verifica se retorna a propriedade id', async () => {
    const [response] = await productsModel.getAll();
    expect(response).to.be.a.property('id');
  })

});

describe('Model: getById', () => {

  before(async () => {
    const execute = [prod];

    sinon.stub(connection, 'execute').resolves(execute);
  })

  after(async () => {
    connection.execute.restore();
  })

  it('Verifica se retorna um array', async () => {
    const response = await productsModel.getById();
    expect(response).to.be.a('array');
  })

  it('Verifica se retorna array vazio ao nao passar o id', async () => {
    const response = await productsModel.getById();
    expect(response).to.be.empty
  })

  it('Verifica se e possivel atualizar um produto', async () => {
  const response = await productsModel.update('name');
  expect(response).to.be.empty
  })
  
  it('Verifica se o retorno e um objeto', async () => {
  const [response] = await productsModel.remove(1);
  expect(response).to.be.a('object')
  })

});
