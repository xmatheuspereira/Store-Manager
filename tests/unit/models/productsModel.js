const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');
const productsModel = require('../../../models/productsModel');

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
    const execute = [products];

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

  it('Verifica se retorna o id do produto cadastrado', async () => {
  const response = await productsModel.register('testando');
  expect(response).to.be.a('number')
  })

  it('Verifica se retorna o id do produto cadastrado', async () => {
    const response = await productsModel.register('name');
    expect(response).to.be.not.true
  })

  it('Verifica se retorna array vazio', async () => {
  const response = await productsModel.search();
  expect(response).to.be.empty
  })

});
