const mappedObjectsFn = require('./1-get_list_student_ids');

const getStudentIdsSum = (getListStudents) => {
  const mappedObjects = mappedObjectsFn(getListStudents);
  const reducedList = mappedObjects.reduce((sum, obj) => sum + obj);
  return reducedList;
};

module.exports = getStudentIdsSum;
