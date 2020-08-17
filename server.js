const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require("./app/models")

const app = express();

const corsOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

db.sequelize.sync();

// db.sequelize.sync({
//     force: true
// }).then(() => {
//     console.log("Drop and re-sync db.");
// });

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to hohohihe"
    })
});

require("./app/routes/fakultas.routes")(app);
require("./app/routes/jurusan.routes")(app);
require("./app/routes/mahasiswa.routes")(app);
require("./app/routes/dosen.routes")(app);
require("./app/routes/mataKuliah.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})