function Student (firstName, lastName, birthYear, grades=[]) {
    this.firstName = firstName;
    this. lastName = lastName;
    this.birthYear = birthYear;
    this.grades = grades;

    this.attendance = new Array(25).fill(null);
    this.attendanceIndex = 0;

    this.getAge = function () {
        const currentYear = new Date ().getFullYear();
        return currentYear - this.birthYear;
    };

    this.getAverageGrade = function () {
        if (this.grades.length === 0) return 0;
        const sum = this.grades.reduce((total, mark) => total + mark, 0);
        return sum / this.grades.length;
    };

    this.present = function () {
        if (this.attendanceIndex < 25) {
            this.attendance[this.attendanceIndex] = true;
            this.attendanceIndex++;
        } else {
            console.log("Уже заповнено 25 занять.");
        }
    };

    this.absent = function () {
        if (this.attendanceIndex < 25) {
            this.attendance[this.attendanceIndex] = false;
            this.attendanceIndex++;
        } else {
            console.log("Всі заняття вже відмічені.");
        }
    };

    this.getAverageAttendance = function () {
        const visited = this. attendance.filter (val => val === true).length;
        const total = this. attendance.filter (val => val !== null).length;
        return total === 0 ? 0 : visited / total ;
    };

    this.summary = function () {
        const avgGrade = this.getAverageGrade();
        const avgAttend = this.getAverageAttendance();

        if (avgGrade > 90 && avgAttend > 0.9) {
            return "Молодець!";
        } else if (avgGrade > 90 || avgAttend > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    };
}

const students = [
    new Student('Іван', 'Петренко', 2000, [95, 88, 92, 85]),
    new Student('Марія', 'Шевченко', 2001, [75, 80, 70, 65]),
    new Student('Олександр', 'Сидоренко', 1999, [90, 85, 88, 93])
];
students.forEach(student => {
    console.log(`${student.firstName} ${student.lastName}:`);
    console.log(`${student.getAge()}`);
    console.log(`${student.getAverageGrade()}`);
    console.log(`${student.getAverageAttendance()}`);
    console.log(`${student.summary()}`);
    console.log('--------------------------');
});