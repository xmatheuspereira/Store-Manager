const { expect } = require("chai");
const sinon = require("sinon");
const salesServices = require("../../../services/salesService");
const salesController = require("../../../controllers/salesController");

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
      sinon.stub(salesServices, 'getAll').resolves(mock)

    });

    after(async () => {
      salesServices.getAll.restore();
    });

    it("Verifica se retorna status 200", async () => {
      await salesController.getAll(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);

    });

    it('Verifica se retorna todos os produtos', async () => {
      await salesController.getAll(req, res);
      expect(res.json.calledWith(mock)).to.be.equal(false);
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
        .stub(salesServices, "getById")
        .resolves(mock);
    });
    after(() => {
      salesServices.getById.restore();
    });

    it("Verifica se retorna status 200", async () => {
      await salesController.getById(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });

    it("Verifica se retorna produto pelo id", async () => {
      await salesController.getById(req, res);
      expect(res.json.calledWith(mock)).to.be.equal(true);
    });
});
