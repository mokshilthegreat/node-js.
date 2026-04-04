const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

// Login Page
router.get('/login', (req, res) => {
  res.render('login');
});

// Login Post
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const admin = await User.findOne({ email, role: "admin" });

  if (!admin) return res.send("Admin not found");

  const isMatch = await bcrypt.compare(password, admin.password);

  if (!isMatch) return res.send("Wrong password");

  res.redirect('/admin/dashboard');
  req.session.admin = admin;
});

// Dashboard
router.get('/dashboard', (req, res) => {
  if (!req.session.admin) return res.redirect('/admin/login');

  res.render('dashboard');
});

// Users List
router.get('/users', async (req, res) => {
  const users = await User.find();
  res.render('users', { users });
});

