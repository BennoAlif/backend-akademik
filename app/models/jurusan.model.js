module.exports = (sequelize, Sequelize) => {
    const Jurusan = sequelize.define("jurusan", {
        kode_jurusan: {
            type: Sequelize.STRING(2),
            primaryKey: true,
            allowNull: false
        },
        nama_jurusan: {
            type: Sequelize.STRING(50),
            allowNull: false
        }
    }, {
        freezeTableName: true,
        timestamps: false
    });
    return Jurusan;
}