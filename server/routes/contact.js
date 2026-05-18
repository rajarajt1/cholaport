const express = require('express');
const router = express.Router();
const {
  getContacts,
  createContact,
  markAsRead
} = require('../controllers/contactController');

router.get('/', getContacts);
router.post('/', createContact);
router.patch('/:id/read', markAsRead);

module.exports = router;
