import AppController from '../controllers/AppController';
import express from 'express';
import StudentsController from '../controllers/StudentsController';

const handler = express.Router();

handler.get('/', AppController.getHomepage);
handler.get('/students', StudentsController.getAllStudents);
handler.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default handler;
