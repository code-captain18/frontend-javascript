namespace Subjects {
  export class Subject {
    teacher: Teacher;

    setTeacher(teacher:Teacher): void {
      this.teacher = teacher;
    }
  }

  // Create and export constants for each subject
  export const cpp = new Cpp();
  export const java = new Java();
  export const react = new React();

  // Create and export teacher object with C++ experience
  export const cTeacher: Teacher = {
    firstName: "John",
    lastName: "Doe",
    experienceTeachingC: 10
  };

  // For Cpp subject
  console.log("C++");
  cpp.setTeacher(cTeacher);
  console.log(cpp.getRequirements());
  console.log(cpp.getAvailableTeacher());

  // For Java subject
  console.log("Java");
  java.setTeacher(cTeacher);
  console.log(java.getRequirements());
  console.log(java.getAvailableTeacher());

  // For React subject
  console.log("React");
  react.setTeacher(cTeacher);
  console.log(react.getRequirements());
  console.log(react.getAvailableTeacher());
}
