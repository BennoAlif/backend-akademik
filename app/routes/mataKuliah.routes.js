module.exports = app => {
    const mataKuliah = require("../controllers/mataKuliah.controller");

    const router = require("express").Router();

    router.post("/", mataKuliah.create);

    router.get("/", mataKuliah.getAll);

    router.get("/:kode_mk", mataKuliah.findById);

    router.put("/:kode_mk", mataKuliah.update);

    router.delete("/:kode_mk", mataKuliah.delete);

    app.use("/api/matakuliah", router);
}