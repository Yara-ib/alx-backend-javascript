const fs = require('fs');

const countStudents = (path) => {
  if (!path || !fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  const data = fs.readFileSync(path, 'utf8');
  const cleanedData = data
    .trim()
    .split('\n')
    .filter((line) => line.length > 0);
  let studentsNumber = 0;
  const items = {};

  for (let i = 1; i < cleanedData.length; i++) {
    const [firstname, lastname, age, field] = cleanedData[i].split(',');
    if (!items[field]) items[field] = [];
    items[field].push(firstname);
    studentsNumber += 1;
  }
  console.log(`Number of students: ${studentsNumber}`);
  for (const item in items) {
    if (items.hasOwnProperty(item)) {
      console.log(
        `Number of students in ${item}: ${items[item].length}. List: ${items[item].join(', ')}`);
    }
  }
};

module.exports = countStudents;
