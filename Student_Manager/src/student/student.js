import { students } from "./studentDetails.js";
import { StudentEngine } from "./studentEngine.js";

const studetnHolder = document.querySelector("#all-students");

const studentManager = new StudentEngine(students, studetnHolder);

studentManager.renderStudentContent();
