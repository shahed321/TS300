var Student = /** @class */ (function () {
    function Student(name) {
        this.name = name;
    }
    Student.prototype.getName = function () {
        return this.name;
    };
    return Student;
}());
var student = new Student("Jane");
console.log(student.getName()); // person.name isn't accessible from outside the class since it's private
