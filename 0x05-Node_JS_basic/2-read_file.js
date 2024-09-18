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

  /* eslint-disable no-plusplus, no-unused-vars */
  for (let i = 1; i < cleanedData.length; i++) {
    const [firstname, lastname, age, field] = cleanedData[i].split(',');
    if (!items[field]) items[field] = [];
    items[field].push(firstname);
    studentsNumber += 1;
  }
  /* eslint-enable no-plusplus, no-unused-vars */
  console.log(`Number of students: ${studentsNumber}`);

  for (const item in items) {
    // Next line is the safer version for >> if (items.hasOwnProperty(item))
    if (Object.prototype.hasOwnProperty.call(items, item)) {
      console.log(`Number of students in ${item}: ${items[item].length}. List: ${items[item].join(', ')}`);
    }
  }
};
module.exports = countStudents;
