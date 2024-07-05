const getListStudentIds = (arrayObjects) => {
  if (!Array.isArray(arrayObjects)) {
    return [];
  }
  const mappedObjects = arrayObjects.map((obj) => obj.id);
  return mappedObjects;
};

module.exports = getListStudentIds;
