const db = require("../models");
const Dosen = db.dosen;
const Op = db.sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.nip) {
        req.status(400).send({
            message: "Content can not be empty"
        });
        return;
    };

    const dosen = {
        nip: req.body.nip,
        nama_dosen: req.body.nama_dosen,
        alamat: req.body.alamat,
        jenis_kelamin: req.body.jenis_kelamin,
        agama: req.body.agama
    };

    Dosen.create(dosen).then((result) => {
        res.send(result)
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error eccurred while creating data."
        })
    });
}

exports.getAll = (req, res) => {
    Dosen.findAll().then((result) => {
        res.send(result)
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving data."
        })
    });
}

exports.findById = (req, res) => {
    const nip = req.params.nip;

    Dosen.findByPk(nip).then((result) => {
        res.send(result)
    }).catch((err) => {
        res.status(500).send({
            message: "Error retrieving Dosen with NIP=" + nip
        })
    });
}

exports.update = (req, res) => {
    const nip = req.params.nip;

    Dosen.update(req.body, {
        where: {
            nip
        }
    }).then((result) => {
        if (result == 1) {
            res.send({
                message: "Dosen was updated successfully"
            })
        } else {
            res.send({
                message: `Cannot update Dosen with NIP=${nip}.`
            })
        }
    }).catch((err) => {
        res.status(500).send({
            message: "Error updating Dosen with NIP= " + nip
        })
    });
}

exports.delete = (req, res) => {
    const nip = req.params.nip;

    Dosen.destroy({
        where: {
            nip
        }
    }).then((result) => {
        if (result == 1) {
            res.send({
                message: "Dosen was deleted successfully"
            })
        } else {
            res.send({
                message: `Cannot delete Dosen with NIP=${nip}.`
            })
        }
    }).catch((err) => {
        res.status(500).send({
            message: "Could not delete Dosen with NIP= " + nip
        })
    });
}