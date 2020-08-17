const db = require("../models");
const Jurusan = db.jurusan;
const Op = db.sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.kode_jurusan) {
        res.status(400).send({
            message: "Content can not be empty"
        })
        return;
    };

    const jurusan = {
        kode_jurusan: req.body.kode_jurusan,
        nama_jurusan: req.body.nama_jurusan,
        kode_fakultas: req.body.kode_fakultas
    };

    Jurusan.create(jurusan).then((result) => {
        res.send(result)
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error eccurred while creating data."
        })
    });
}

exports.getAll = (req, res) => {
    Jurusan.findAll({
        include: ["fakultas"],
    }).then((result) => {
        res.send(result)
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving data."
        })
    });
}

exports.findById = (req, res) => {
    const kode_jurusan = req.params.kode_jurusan;

    Jurusan.findByPk(kode_jurusan, {
        include: ["fakultas"],
    }).then((result) => {
        res.send(result)
    }).catch((err) => {
        res.status(500).send({
            message: "Error retrieving Tutorial with kode fakultas=" + kode_fakultas
        })
    });
}

exports.update = (req, res) => {
    const kode_jurusan = req.params.kode_jurusan;

    Jurusan.update(req.body, {
        where: {
            kode_jurusan
        }
    }).then((result) => {
        if (result == 1) {
            res.send({
                message: "Jurusan was updated successfully"
            })
        } else {
            res.send({
                message: `Cannot update Jurusan with kode jurusan=${kode_jurusan}.`
            })
        }
    }).catch((err) => {
        res.status(500).send({
            message: "Error updating Jurusan with kode jurusan= " + kode_jurusan
        })
    });
}

exports.delete = (req, res) => {
    const kode_jurusan = req.params.kode_jurusan;

    Jurusan.destroy({
        where: {
            kode_jurusan
        }
    }).then((result) => {
        if (result == 1) {
            res.send({
                message: "Jurusan was deleted successfully"
            })
        } else {
            res.send({
                message: `Cannot delete Jurusan with kode jurusan=${kode_jurusan}.`
            })
        }
    }).catch((err) => {
        res.status(500).send({
            message: "Could not delete Jurusan with kode jurusan= " + kode_jurusan
        })
    });
}