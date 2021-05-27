const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const permission = require('../middlewares/permission');

// Get all products
router.get('/', permission('admin', 'client'), async (req, res) => {
  const credits = await sequelize.models.credits.findAndCountAll();
  return res.status(200).json({ data: credits });
});

// Create a new credit
router.post('/', permission('admin', 'client'), async (req, res) => {
  const { body } = req;
  const credit = await sequelize.models.credits.create({
    description: body.description,
    periodicidad: body.periodicidad,
    cifra: body.cifra,
  });
  await credit.save();
  return res.status(201).json({ data: credit })
});

// Update a credit by id
router.put('/:id', permission('admin'), async (req, res) => {
  const { body, params: { id } } = req;
  const credit = await sequelize.models.credits.findByPk(id);
  if (!credit) {
    return res.status(404).json({ code: 404, message: 'Credit not found' });
  }
  const updatedCredit = await credit.update({
    description: body.description,
    periodicidad: body.periodicidad,
    cifra: body.cifra,
  });
  return res.json({ data: updatedCredit });
});

// Delete a credit by id
router.delete('/:id', permission('admin'), async (req, res) => {
  const { params: { id } } = req;
  const credit = await sequelize.models.credits.findByPk(id);
  if (!credit) {
    return res.status(404).json({ code: 404, message: 'Credit not found' });
  }
  await credit.destroy();
  return res.json();
});

module.exports = router;