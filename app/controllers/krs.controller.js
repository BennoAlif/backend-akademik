const db = require("../models");
const Krs = db.krs;
const Op = db.sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.nip && !req.body.nim && !req.body.kode_mk) {
    req.status(400).send({
      message: "Content can not be empty",
    });
    return;
  }

  const krs = {
    nip: req.body.nip,
    nim: req.body.nim,
    kode_mk: req.body.kode_mk,
    indeks: req.body.indeks,
  };

  Krs.create(krs)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error eccurred while creating data.",
      });
    });
};

exports.getAll = (req, res) => {
  Krs.findAll({
    include: ["mahasiswa", "dosen", "matakuliah"],
  })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving data.",
      });
    });
};

exports.findById = (req, res) => {
  const id = req.params.id;

  Krs.findByPk(id, {
    include: ["mahasiswa", "dosen", "matakuliah"],
  })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving KRS with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Krs.update(req.body, {
    where: {
      id,
    },
  })
    .then((result) => {
      if (result == 1) {
        res.send({
          message: "KRS was updated successfully",
        });
      } else {
        res.send({
          message: `Cannot update KRS with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating KRS with id= " + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Krs.destroy({
    where: {
      id,
    },
  })
    .then((result) => {
      if (result == 1) {
        res.send({
          message: "KRS was deleted successfully",
        });
      } else {
        res.send({
          message: `Cannot delete KRS with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete KRS with id= " + id,
      });
    });
};
