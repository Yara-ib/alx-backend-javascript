const getStudentsByLocation = (arrObj, city) => arrObj.filter((Obj) => Obj.location === city);
module.exports = getStudentsByLocation;
