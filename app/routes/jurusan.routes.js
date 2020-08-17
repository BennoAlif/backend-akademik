module.exports = app => {
    const jurusan = require("../controllers/jurusan.controller");

    const router = require("express").Router();

    router.post("/", jurusan.create);

    router.get("/", jurusan.getAll);

    router.get("/:kode_jurusan", jurusan.findById);

    router.put("/:kode_jurusan", jurusan.update);

    router.delete("/:kode_jurusan", jurusan.delete);

    app.use("/api/jurusan", router);
}