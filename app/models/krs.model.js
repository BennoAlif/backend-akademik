module.exports = (sequelize, Sequelize) => {
    const Krs = sequelize.define("krs", {
        indeks: {
            type: Sequelize.CHAR(1)
        }
    }, {
        freezeTableName: true,
        timestamps: false
    });
    return Krs;
}