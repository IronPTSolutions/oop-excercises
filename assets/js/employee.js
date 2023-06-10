class Employee {
  constructor(name, jobTitle, salary) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
  }

  updateSalary(newSalary) {
    this.salary = newSalary;
  }
}
