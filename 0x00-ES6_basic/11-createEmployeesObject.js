export default function createEmployeesObject(departmentName, employees) {
  const newArray = [];
  for (const employee of employees) {
    newArray.push(`'${employee}'`);
  }
  return `{ ${departmentName}: [ ${newArray} ] }`;
}
