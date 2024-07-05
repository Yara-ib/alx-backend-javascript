const getListStudentIds = (arrayObjects) => {
  if (!Array.isArray(arrayObjects)) {
    return [];
  }
  return arrayObjects.map((obj) => obj.id);
};

module.exports = getListStudentIds;
