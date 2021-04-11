require('dotenv').config();
const {port} = require('./infrastructure/config/rest');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());




const server = app.listen(port, () => console.log(`APP RUNNING ON PORT ${port} [OK]`));
