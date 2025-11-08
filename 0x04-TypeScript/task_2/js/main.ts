interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class TeacherClass implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

function createEmployee(salary: number | string): Director | TeacherClass {
  if (salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

const employee1 = createEmployee(200);

const employee2 = createEmployee(1000);
const employee3 = createEmployee('$500');

function isDirector(employee: Director | TeacherClass): employee is Director {
  return employee instanceof Director;
}
function executeWork(employee: Director | TeacherClass): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}
