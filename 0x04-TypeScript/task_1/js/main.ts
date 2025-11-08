interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log(teacher3);

interface Director extends Teacher {
  numberOfReports: number;
}

const director1: Director = {
  firstName: 'Jane',
  lastName: 'Smith',
  fullTimeEmployee: true,
  location: 'New York',
  numberOfReports: 5,
};
console.log(director1);

interface printTeacherFunction {
  (teacher: { firstName: string; lastName: string }): string;
}

// Declarative function with destructured parameter
function printTeacher({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}): string {
  return `${firstName}. ${lastName}`;
}

// Example usage
console.log(printTeacher({ firstName: 'Emeka', lastName: 'Junior' }));
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}
// 6. StudentClass implementation (REQUIRED EXACT NAME)
class StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass('Emeka', 'Junior');
console.log(student.displayName());
console.log(student.workOnHomework());
