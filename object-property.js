const students = [
    {id: 2, names: "omar sunny"},
    {id: 45, names: "Sakib Khan"},
    {id: 50, names: "Manna"}
]

const names = students.map(s => s.names);
const id = students.map(s => s.id);
const bigger = students.filter(s => s.id>40);
// console.log(names, id);
console.log(bigger);