module.exports = (sequelize, Sequelize) => {
    const Dosen = sequelize.define("dosen", {
        nip: {
            type: Sequelize.STRING(11),
            primaryKey: true,
            allowNull: false
        },
        nama_dosen: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        alamat: {
            type: Sequelize.STRING(100),
        },
        jenis_kelamin: {
            type: Sequelize.ENUM("L", "P")
        },
        agama: {
            type: Sequelize.STRING(10),
        }
    }, {
        freezeTableName: true,
        timestamps: false
    });
    return Dosen;
}