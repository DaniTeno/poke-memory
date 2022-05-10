// cmd: ipconfig => (IPv4) = 192.168.0.102
require('dotenv').config()
const cors = require('cors');
const express = require('express')
const app = express();
app.use(cors());
app.use(express.json());
// const users = express.static('./public/users.html')
const PORT = process.env.PORT;
// const mongoConnect = require('./api/config/mongoDB');

app.use('/', express.static('./public/'));
// app.use('/users', users);
// app.use('/api', require('./api/index'));
app.listen(PORT, () => {
    console.log(`Server Live in: http://localhost:${PORT}`)
});
// mongoConnect();
