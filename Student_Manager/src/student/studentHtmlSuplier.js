export class StudentHtmlSupplier {
  static studentHtml(allStudents) {
    let studentContent = ``;
    allStudents.forEach((student) => {
      studentContent = `<div class="flex justify-around p-6 rounded-lg shadow-lg bg-white">
              <div>
                <h3 class="mb-2 text-lg font-bold">Studetn details</h3>
                <p class="flex gap-3 justify-between">
                  <span class="font-bold">Name:</span>
                  <span>${student.name}</span>
                </p>
                <p class="flex gap-3 justify-between">
                  <span class="font-bold">Roll:</span> <span>${student.roll}</span>
                </p>
                <p class="flex gap-3 justify-between">
                  <span class="font-bold">Class:</span> <span>${student.class}</span>
                </p>
                <p class="flex gap-3 justify-between">
                  <span class="font-bold">section:</span> <span>${student.section}</span>
                </p>
              </div>
              <div class="h-full">
                <span class="bg-gray-700 px-[0.5px] h-full inline-block"></span>
              </div>
              <div>
                <h3 class="mb-2 text-lg font-bold">Grades</h3>
                <p class="flex gap-12 justify-between">
                  <span class="font-bold">Math:</span>
                  <span>${student.marks.math}</span>
                </p>
                <p class="flex gap-12 justify-between">
                  <span class="font-bold">Physics:</span> <span>${student.marks.physics}</span>
                </p>
                <p class="flex gap-12 justify-between">
                  <span class="font-bold">Chemisry:</span> <span>${student.marks.chemistry}</span>
                </p>
                <p class="flex gap-12 justify-between">
                  <span class="font-bold">English:</span> <span>${student.marks.english}</span>
                </p>
              </div>
            </div>`;
    });
  }
}
