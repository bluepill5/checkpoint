const express = require('express');
const router = express.Router();
const sequelize = require('../db');

// Get all users
router.get('/', async (req, res) => {
    const users = await sequelize.models.users.findAndCountAll();
    return res.status(200).json({ data: users });
});

module.exports = router;