const router = require('express').Router();
const { Test } = require('../db/models');

router.get('/', async (req, res) => {
  const allEntries = await Test.findAll();
  res.json({ allEntries });
});

module.exports = router;
