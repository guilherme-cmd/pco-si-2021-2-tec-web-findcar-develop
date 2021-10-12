require('dotenv').config();
const express = require('express');
const cors = require('cors');

const routes = require('./routes/index');

const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

module.exports = server;
