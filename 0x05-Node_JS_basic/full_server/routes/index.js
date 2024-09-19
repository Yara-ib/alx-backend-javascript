const AppController = require('../controllers/AppController');
const express = require('express');
const StudentsController = require('../controllers/StudentsController');

const handler = express.Router();

handler.get('/', AppController.getHomepage);
handler.get('/students', StudentsController.getAllStudents);
handler.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = handler;
