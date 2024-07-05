const mapped = require('./1-get_list_student_ids');

const getStudentIdsSum = (getListStudents) => mapped(getListStudents).reduce((sum, x) => sum + x);
module.exports = getStudentIdsSum;
