const db = require("../models");
const Mahasiswa = db.mahasiswa;
const Op = db.sequelize.Op;

exports.create = (req, res) => {
    if(!req.body.nim){
        res.status(400).send({
            message: "Cannot can not be empty"
        })
        return;
    };

    const mahasiswa = {
        nim: req.body.nim,
        nama: req.body.nama,
        alamat: req.body.alamat,
        tempat_lahir: req.body.tempat_lahir,
        tanggal_lahir: req.body.tanggal_lahir,
        jenis_kelamin: req.body.jenis_kelamin,
        agama: req.body.agama,
        kode_jurusan: req.body.kode_jurusan
    };

    Mahasiswa.create(mahasiswa).then((result) => {
        res.send(result)
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error eccurred while creating data."
        })
    });
}

exports.getAll = (req, res) => {
    Mahasiswa.findAll({
        include: ["jurusan"]
    }).then((result) => {
        res.send(result)
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving data."
        })
    });
}

exports.findById = (req, res) => {
    const nim = req.params.nim;

    Mahasiswa.findByPk(nim, {
        include: ["jurusan"]
    }).then((result) => {
        res.send(result)
    }).catch((err) => {
        res.status(500).send({
            message: "Error retrieving Mahasiswa with NIM=" + nim
        })
    });
}

exports.update = (req, res) => {
    const nim = req.params.nim;

    Mahasiswa.update(req.body, {
        where: {
            nim
        }
    }).then((result) => {
        if (result == 1) {
            res.send({
                message: "Mahasiswa was updated successfully"
            })
        } else {
            res.send({
                message: `Cannot update Mahasiswa with NIM=${nim}.`
            })
        }
    }).catch((err) => {
        res.status(500).send({
            message: "Error updating Mahasiswa with NIM= " + nim
        })
    });
}

exports.delete = (req, res) => {
    const nim = req.params.nim;

    Mahasiswa.destroy({
        where: {
            nim
        }
    }).then((result) => {
        if (result == 1) {
            res.send({
                message: "Mahasiswa was deleted successfully"
            })
        } else {
            res.send({
                message: `Cannot delete Mahasiswa with NIM=${nim}.`
            })
        }
    }).catch((err) => {
        res.status(500).send({
            message: "Could not delete Mahasiswa with NIM= " + nim
        })
    });
}