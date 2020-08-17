module.exports = app => {
    const krs = require("../controllers/krs.controller");

    const router = require("express").Router();

    router.post("/", krs.create);

    router.get("/", krs.getAll);

    router.get("/:id", krs.findById);

    router.put("/:id", krs.update);

    router.delete("/:id", krs.delete);

    app.use("/api/krs", router);
}