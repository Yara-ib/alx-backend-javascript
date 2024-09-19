const countStudents = require('../../7-read_file_async');

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const result = await countStudents(path);
      response.status(200).send(result);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
