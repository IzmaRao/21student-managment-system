#! /usr/bin/env node
class Student {
    static nextStudentid = 10000;
    StudentID;
    name;
    enrolledCourses;
    Balance;
    constructor(name) {
        this.StudentID = Student.nextStudentid;
        this.name = name;
        this.enrolledCourses = [];
        this.Balance = 0;
    }
    ;
    enroll(course) {
        this.enrolledCourses.push(course);
    }
    ;
    viewBalnace() {
        console.log(`Balance for ${this.name}: ${this.Balance}`);
    }
    ;
    payTuition(amount) {
        this.Balance = amount;
        console.log(`Paid $${amount} towards tuition for all`);
    }
    ;
    showStatus() {
        console.log(`Student Details: 
        Name: ${this.name}
        Student ID: ${this.StudentID}
        Erolled Courses: ${this.enrolledCourses.join(',')}
        Balance: $${this.Balance}`);
    }
    ;
}
;
const Student1 = new Student('Izma');
Student1.enroll('Artificial Intelligence');
Student1.enroll('Cloud Naative Computing');
Student1.viewBalnace();
Student1.payTuition(500);
Student1.showStatus();
export {};
