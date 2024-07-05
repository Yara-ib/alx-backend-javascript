const getStudentsByLocation = (arrayObjects, city) => {
  const filteredList = arrayObjects.filter((Obj) => Obj.location === city);
  return filteredList;
};

module.exports = getStudentsByLocation;
