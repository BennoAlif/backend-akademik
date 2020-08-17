const dbConfig = require("../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.fakultas = require("./fakultas.model")(sequelize, Sequelize);
db.jurusan = require("./jurusan.model")(sequelize, Sequelize);
db.mahasiswa = require("./mahasiswa.model")(sequelize, Sequelize);
db.dosen = require("./dosen.model")(sequelize, Sequelize);
db.mataKuliah = require("./mataKuliah.model")(sequelize, Sequelize);
db.krs = require("./krs.model")(sequelize, Sequelize);

db.fakultas.hasMany(db.jurusan, {
    as: "jurusan",
    foreignKey: "kode_fakultas",
});
db.jurusan.belongsTo(db.fakultas, {
    as: "fakultas",
    foreignKey: "kode_fakultas",
});

db.jurusan.hasMany(db.mahasiswa, {
    as: "mahasiswa",
    foreignKey: "kode_jurusan",
});
db.mahasiswa.belongsTo(db.jurusan, {
    as: "jurusan",
    foreignKey: "kode_jurusan"
});

db.dosen.belongsTo(db.mataKuliah, {
    as: "mata_kuliah",
    foreignKey: "kode_mk"
});
db.mataKuliah.hasMany(db.dosen, {
    as: "dosen",
    foreignKey: "kode_mk"
});

db.krs.belongsTo(db.mahasiswa, {
    as: "mahasiswa",
    foreignKey: "nim"
});

db.krs.belongsTo(db.dosen, {
    as: "dosen",
    foreignKey: "nip"
});

db.krs.belongsTo(db.mataKuliah, {
    as: "matakuliah",
    foreignKey: "kode_mk"
})

module.exports = db;