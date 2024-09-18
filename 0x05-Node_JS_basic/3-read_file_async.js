const fs = require('fs').promises;

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8')
    .then((data) => {
      const cleanedData = data.trim().split('\n').filter((line) => line.length > 0);
      let studentsNumber = 0;
      const items = {};
      /* eslint-disable no-plusplus, no-unused-vars */
      for (let i = 1; i < cleanedData.length; i++) {
        const [firstname, lastname, age, field] = cleanedData[i].split(',');
        if (!items[field]) items[field] = [];
        items[field].push(firstname);
        studentsNumber += 1;
      }
      /* eslint-disable no-plusplus, no-unused-vars */
      console.log(`Number of students: ${studentsNumber}`);
      for (const item in items) {
        if (Object.prototype.hasOwnProperty.call(items, item)) {
          console.log(`Number of students in ${item}: ${items[item].length}. List: ${items[item].join(', ')}`);
        }
      }
      resolve();
    })
    .catch(() => {
      reject(new Error('Cannot load the database'));
    });
});

module.exports = countStudents;
