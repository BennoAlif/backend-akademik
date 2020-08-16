module.exports = (sequelize, Sequelize) => {
    const MataKuliah = sequelize.define("mata_kuliah", {
        kode_mk: {
            type: Sequelize.STRING(5),
            primaryKey: true,
            allowNull: false
        },
        nama_mk: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        sks: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        semester: {
            type: Sequelize.INTEGER,
            allowNull: false
        }

    }, {
        freezeTableName: true,
        timestamps: false
    });
    return MataKuliah;
}