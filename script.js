/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentbyMap() {  let studentsWithMarksOver50 = students.filter(student => student.marks > 50);  
                              studentsWithMarksOver50.map(student => console.log(student));}
function PrintStudentbyForEach() { 
  students.forEach(student => {   
    if (student.marks > 50) {      
      console.log(student);    }  });}
function addData() {  
  let newStudent = {id: 4, name: "susan", age: "20", marks: 45};  
  students.push(newStudent);  console.log(newStudent);}
function removeFailedStudent() { 
  students = students.filter(student => student.marks >= 50);  
  console.log(students);}
function ConcatenateArray() {  
  let newStudents = [    {id: 5, name: "emma", age: "19", marks: 70},    {id: 6, name: "ryan", age: "21", marks: 60},    {id: 7, name: "lily", age: "18", marks: 55}  ]; 
  students = students.concat(newStudents);  console.log(students);}
