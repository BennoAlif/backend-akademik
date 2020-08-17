module.exports = app => {
    const dosen = require("../controllers/dosen.controller");

    const router = require("express").Router();

    router.post("/", dosen.create);

    router.get("/", dosen.getAll);

    router.get("/:nip", dosen.findById);

    router.put("/:nip", dosen.update);

    router.delete("/:nip", dosen.delete);

    app.use("/api/dosen", router);
}