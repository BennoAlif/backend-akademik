const db = require("../models");
const Fakultas = db.fakultas;
const Op = db.sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.kode_fakultas) {
        req.status(400).send({
            message: "Content can not be empty"
        });
        return;
    }

    const fakultas = {
        kode_fakultas: req.body.kode_fakultas,
        nama_fakultas: req.body.nama_fakultas
    };

    Fakultas.create(fakultas).then((result) => {
        res.send(result)
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error eccurred while creating data."
        })
    });
}

exports.getAll = (req, res) => {
    Fakultas.findAll().then((result) => {
        res.send(result)
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving data."
        })
    });
}

exports.findById = (req, res) => {
    const kode_fakultas = req.params.kode_fakultas;

    Fakultas.findByPk(kode_fakultas).then((result) => {
        res.send(result)
    }).catch((err) => {
        res.status(500).send({
            message: "Error retrieving Tutorial with kode fakultas=" + kode_fakultas
        })
    });
}

exports.update = (req, res) => {
    const kode_fakultas = req.params.kode_fakultas;

    Fakultas.update(req.body, {
        where: {
            kode_fakultas
        }
    }).then((result) => {
        if (result == 1) {
            res.send({
                message: "Fakultas was updated successfully"
            })
        } else {
            res.send({
                message: `Cannot update Fakultas with kode fakultas=${kode_fakultas}.`
            })
        }
    }).catch((err) => {
        res.status(500).send({
            message: "Error updating Fakultas with kode fakultas= " + kode_fakultas
        })
    });
}

exports.delete = (req, res) => {
    const kode_fakultas = req.params.kode_fakultas;

    Fakultas.destroy({
        where: {
            kode_fakultas
        }
    }).then((result) => {
        if (result == 1) {
            res.send({
                message: "Fakultas was deleted successfully"
            })
        } else {
            res.send({
                message: `Cannot delete Fakultas with kode fakultas=${kode_fakultas}.`
            })
        }
    }).catch((err) => {
        res.status(500).send({
            message: "Could not delete Fakultas with kode fakultas= " + kode_fakultas
        })
    });
}