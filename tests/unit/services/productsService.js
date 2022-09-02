const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');
const productsService = require('../../../services/productsService');
const productsModel = require('../../../models/productsModel');
const productsController = require('../../../controllers/productsController');

const prod = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' }
]


describe('Service: getAll', () => {
  before(
    async () => {
    const execute = [prod];

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
    const response = await productsService.getAll();
    expect(response).to.be.a('array');
  })

    before(async () =>
      sinon.stub(productsModel, "getById").resolves([])
    );

    after(async () => productsModel.getById.restore());

    it("Verifica se é retornado undefined caso nao exista o produto", async () => {
      const product = await productsService.getById(103254987);

      expect(product).to.be.equal(undefined);
    });

    describe("remove", () => {

      it("Verifica se retorna null ao deletar um produto inexistente", async () => {
        const deletion = await productsService.remove(99);

        expect(deletion).to.be.deep.equal(null);
      });
    });
  
    describe("register", () => {

    it("Verifica se e possivel cadastrar um produto e retorna um objeto", async () => {
      const deletion = await productsService.register('teste');

      expect(deletion).to.be.a('object');
    });
      
    it("Verifica se retorna null ao tentar atualizar um produto sem id", async () => {
      const deletion = await productsService.update();

      expect(deletion).to.be.equals(null);
    });
  });
});
