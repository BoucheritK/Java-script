const persons = [
    { name: 'Anthony Young', age: 7 },
    { name: 'Kieran Davis', age: 34 },
    { name: 'James Woods', age: 23 },
    { name: 'Khalil Sexton', age: 16 },
    { name: 'Beckett Turner', age: 42 },
];
const adultsNames = persons.filter(function(person) {
    return person.age >= 18;
})
.map(function(person){
    return person.name;
});
console.log(adultsNames);