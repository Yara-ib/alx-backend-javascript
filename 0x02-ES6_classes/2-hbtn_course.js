export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // Getter & Setter for Name
  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  // Getter & Setter for Length
  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  // Getter & Setter for Students
  get students() {
    return this._students;
  }

  set students(students) {
    this._students = students;
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be Array of strings');
    }
  }
}
