interface student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentA: student = {
  firstName: 'Jack',
  lastName: 'Arthur',
  age: 30,
  location: 'Location',
};

const studentB: student = {
  firstName: 'Mary',
  lastName: 'Corey',
  age: 30,
  location: 'Location',
};

const studentsList = [studentA, studentB];
