const { expect } = require("chai");
const sinon = require("sinon");
const productsServices = require("../../../services/productsService");
const productsController = require("../../../controllers/productsController");

describe("Controller Tests", () => {
  describe("getAll", () => {
    const mock = [
        { id: 1, name: "Martelo de Thor" },
        { id: 2, name: "Traje de encolhimento" },
        { id: 3, name: "Escudo do Capitão América" }
    ];
    const req = {};
    const res = {};
    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productsServices, 'getAll').resolves(mock)

    });

    after(async () => {
      productsServices.getAll.restore();
    });

    it("Verifica se retorna status 200", async () => {
      await productsController.getAll(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);

    });

    it('Verifica se retorna todos os produtos', async () => {
      await productsController.getAll(req, res);
      expect(res.json.calledWith(mock)).to.be.equal(true);
    })
  });
});

  describe("getById", async () => {
    const mock = {
      id: 1,
      name: "Martelo de Thor",
    };
    const req = {};
    const res = {};
    before(() => {
      req.params = { id: 1 };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productsServices, "getById")
        .resolves(mock);
    });
    after(() => {
      productsServices.getById.restore();
    });

    it("Verifica se retorna status 200", async () => {
      await productsController.getById(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });

    it("Verifica se retorna produto pelo id", async () => {
      await productsController.getById(req, res);
      expect(res.json.calledWith(mock)).to.be.equal(true);
    });
  });

  describe("register", async () => {
    const req = {};
    const res = {};
    const mock = {
      id: 1,
      name: "Joia do infinito",
    };

    before(() => {
      req.body = {
        name: "Joia do infinito"
      };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productsServices, "register").resolves(mock);
    });

    after(() => {
      productsServices.register.restore();
    });

    it("Verifica se retorna status 201", async () => {
      await productsController.register(req, res);
      expect(res.status.calledWith(201)).to.be.equal(true);
    });
  });

  describe("update", async () => {
    const mock = {
      id: 1,
      name: "Joia do infinito",
    };
    const req = {};
    const res = {};
    before(() => {
      req.body = { name: "Joia do infinito" };
      req.params = { id: 1 };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productsServices, "update").resolves(mock);
    });

    after(() => {
      productsServices.update.restore();
    });

     it("Verifica se retorna status 200 e o produto atualizado", async () => {
      await productsController.update(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
      expect(res.json.calledWith(mock)).to.be.equal(false);
     });

    describe("remove", () => {

      it("Verifica se o produto e deletado", async () => {
        const response = await productsController.remove(req, res);

        expect(response).to.be.equal(undefined);
      });
      
    });
});
