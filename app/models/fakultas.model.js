module.exports = (sequelize, Sequelize) => {
    const Fakultas = sequelize.define("fakultas", {
        kode_fakultas: {
            type: Sequelize.STRING(2),
            primaryKey: true,
            allowNull: false
        },
        nama_fakultas: {
            type: Sequelize.STRING(50),
            allowNull: false
        }
    }, {
        freezeTableName: true,
        timestamps: false
    });
    return Fakultas;
}