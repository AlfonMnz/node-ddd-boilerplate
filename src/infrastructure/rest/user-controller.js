const express = require('express');
const container = require('../../container');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        //TODO
    } catch (error) {
        res.status(500).json({error: error.toString()});
    }
});