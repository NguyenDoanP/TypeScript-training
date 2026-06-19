class Employee {
  public name: string;

  protected department: string;

  private salary: number;

  constructor(name: string, department: string, salary: number) {
    this.name = name;
    this.department = department;
    this.salary = salary;
  }
}
