const students = [
    { name: "Pranil", age: 20 },
    { name: "Rahul", age: 21 }
];
const Student = students.find((s) => {
    return s.name === "Pranil";
});
console.log(Student);