module.exports = app => {
    const fakultas = require("../controllers/fakultas.controller");

    const router = require("express").Router();

    router.post("/", fakultas.create);

    router.get("/", fakultas.getAll);

    router.get("/:kode_fakultas", fakultas.findById);

    router.put("/:kode_fakultas", fakultas.update);

    router.delete("/:kode_fakultas", fakultas.delete);

    app.use("/api/fakultas", router);
}