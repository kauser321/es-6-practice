class student {
    constructor(studentName, studentId) {
        this.name = studentName;
        this.id = studentId;
        this.school = "Gouripur Rk govt high school";
    }
}
const student1 = new student("kauser hossain", 32);
const student2 = new student("Ayesha ", 43);
console.log(student1, student2.id);