class Student {
   constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
   }
}



const st1 = new Student("Muhammed", "Alaa", 22);
const st2 = new Student("John", "Smith", 23);

st1.age = 40


console.log(st1)
console.log(st2)
