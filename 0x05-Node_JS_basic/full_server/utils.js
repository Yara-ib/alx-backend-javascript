import countStudents from '../7-read_file_async';

const readDatabase = (path) => new Promise((resolve, reject) => {
  countStudents(path)
    .then((data) => resolve(data))
    .catch(() => reject(new Error('Cannot load the database')));
});

export default readDatabase;
