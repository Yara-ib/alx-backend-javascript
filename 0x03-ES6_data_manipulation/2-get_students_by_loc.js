const getStudentsByLocation = (arrayObjects, city) => {
  return arrayObjects.filter((Obj) => Obj.location === city);
};

module.exports = getStudentsByLocation;
