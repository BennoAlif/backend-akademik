module.exports = (sequelize, Sequelize) => {
    const Mahasiswa = sequelize.define("mahasiswa", {
        nim: {
            type: Sequelize.STRING(8),
            primayKey: true,
            allowNull: false
        },
        nama: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        alamat: {
            type: Sequelize.STRING(100),
        },
        tempat_lahir: {
            type: Sequelize.STRING(20),
        },
        tanggal_lahir: {
            type: Sequelize.DATEONLY
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
    return Mahasiswa;
}