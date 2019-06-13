class Student {
   constructor(firstName, lastName, year) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.grade = year;
      this.tardies = 0;
      this.scores = [];
   }

   fullName() {
      return `Your Full Name is : ${this.firstName} ${this.lastName}`;
   }

   markLate() {
      this.tardies += 1;
      if (this.tardies >= 3) {
         return "You Are Fired!"
      }
      return `${this.firstName} ${this.lastName} has ${this.tardies} times!`
   }

   addScore(score) {
      this.scores.push(score);
      return this.scores;
   }

   calculateAverage() {
      let sum = this.scores.reduce(function (a, b) { return a + b });
      return sum / this.scores.length;
   }

   static enrollStudents() {    // only for Classes !
      return "Enroll All Students!"
   }

}



const student_1 = new Student("Muhammed", "Alaa", 22);
const student_2 = new Student("John", "Smith", 23);


console.log(student_1.fullName())
console.log(student_1.markLate())
console.log(student_1.markLate())
console.log(student_1.markLate()) // fired!

console.log(student_1.scores);
console.log(student_1.addScore(30));
console.log(student_1.addScore(55));
console.log(student_1.addScore(22));
console.log(student_1.addScore(10));

console.log(student_1.calculateAverage());

// console.log(student_1.enrollStudents()); // This is wrong !!
console.log(Student.enrollStudents());

//----------------------------------------------------//
/*  The results
Your Full Name is : Muhammed Alaa
Muhammed Alaa has 1 times!
Muhammed Alaa has 2 times!
You Are Fired!
[]
[ 30 ]
[ 30, 55 ]
[ 30, 55, 22 ]
[ 30, 55, 22, 10 ]
29.25
Enroll All Students!
*/