import { StudentHtmlSupplier } from "./studentHtmlSuplier.js";

export class StudentEngine {
  constructor(students, studetnsHolder) {
    this.students = students;
    this.studetnsHolder = studetnsHolder;
  }

  renderStudentContent() {
    const allStudents = StudentHtmlSupplier.studentHtml(this.students);

    this.studetnsHolder.innerHTML = allStudents;
  }
}
