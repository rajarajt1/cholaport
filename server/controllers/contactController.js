const Contact = require('../models/Contact');

// Get all contacts
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create contact
const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    const contact = await Contact.create({ name, email, message });
    res.status(201).json({
      message: 'Thank you for your message! I will get back to you soon.',
      contact
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Mark as read
const markAsRead = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    );
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getContacts,
  createContact,
  markAsRead
};
