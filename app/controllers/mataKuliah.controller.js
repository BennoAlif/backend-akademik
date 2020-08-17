const db = require("../models");
const MataKuliah = db.mataKuliah;
const Op = db.sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.kode_mk) {
        req.status(400).send({
            message: "Content can not be empty"
        });
        return;
    };

    const mataKuliah = {
        kode_mk: req.body.kode_mk,
        nama_mk: req.body.nama_mk,
        sks: req.body.sks,
        semester: req.body.semester,
    }

    MataKuliah.create(mataKuliah).then((result) => {
        res.send(result)
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error eccurred while creating data."
        })
    });
}

exports.getAll = (req, res) => {
    MataKuliah.findAll({
        include: ["dosen"]
    }).then((result) => {
        res.send(result)
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving data."
        })
    });
}

exports.findById = (req, res) => {
    const kode_mk = req.params.kode_mk;

    MataKuliah.findByPk(kode_mk, {
        include: ["dosen"]
    }).then((result) => {
        res.send(result)
    }).catch((err) => {
        res.status(500).send({
            message: "Error retrieving Mata Kuliah with kode mata kuliah=" + kode_mk
        })
    });
}

exports.update = (req, res) => {
    const kode_mk = req.params.kode_mk;

    MataKuliah.update(req.body, {
        where: {
            kode_mk
        }
    }).then((result) => {
        if (result == 1) {
            res.send({
                message: "Mata Kuliah was updated successfully"
            })
        } else {
            res.send({
                message: `Cannot update Mata Kuliah with kode mata kuliah=${kode_mk}.`
            })
        }
    }).catch((err) => {
        res.status(500).send({
            message: "Error updating Mata Kuliah with kode mata kuliah= " + kode_mk
        })
    });
}

exports.delete = (req, res) => {
    const kode_mk = req.params.kode_mk;

    MataKuliah.destroy({
        where: {
            kode_mk
        }
    }).then((result) => {
        if (result == 1) {
            res.send({
                message: "Mata Kuliah was deleted successfully"
            })
        } else {
            res.send({
                message: `Cannot delete Mata Kuliah with kode mata kuliah=${kode_mk}.`
            })
        }
    }).catch((err) => {
        res.status(500).send({
            message: "Could not delete Mata Kuliah with kode mata kuliah= " + kode_mk
        })
    });
}