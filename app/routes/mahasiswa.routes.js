module.exports = app => {
    const mahasiswa = require("../controllers/mahasiswa.controller");

    const router = require("express").Router();

    router.post("/", mahasiswa.create);

    router.get("/", mahasiswa.getAll);

    router.get("/:nim", mahasiswa.findById);

    router.put("/:nim", mahasiswa.update);

    router.delete("/:nim", mahasiswa.delete);

    app.use("/api/mahasiswa", router);
}