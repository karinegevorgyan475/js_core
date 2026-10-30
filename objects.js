//Task 13. createStudent(name, age, city)
/*
function createStudent(name,age,city)
{
    return {
            name: name,
            age: age,
            city: city
        }
};
console.log(createStudent("ANI",23,"YEREVAN"));
console.log(createStudent("ARMEN",19,"GYUMRI"));
*/

//Task 14. getFullName(person)
/*
function getFullName (person)
{
    return  person.firstName + " " + person.lastName;
};

console.log(getFullName({firstName:"ANNA",lastName:"VARDANYAN"}));
console.log(getFullName({firstName:"SYLVIE",lastName:"HAKOBYAN"}));
*/

//Task 15. isAdult(person)
/*
function isAdult(person)
{
    return (person.age >= 18);
};
console.log(isAdult({name:"LILIT",age:45 }));
console.log(isAdult({name:"DAVIT",age:12}));
*/

//Task 16. getProperty(obj, key)
/*
function getProperty(obj,key)
{
    return obj[key];
};

console.log(getProperty({color:"RED",size:"M"},"size"));
console.log(getProperty({color:"YELLOW",size: "L"},"color"));
*/

//Task 17. updateAge(person, newAge)
/*
function updateAge(person,newAge)
{
    person.age = newAge;
    return person;
};

console.log(updateAge({name:"ANI",age:20},"21"));
console.log(updateAge({name:"ALEX",age:32},"33"));
*/

//Task 18. addEmail(person, email)
/*
function addEmail(person,email)
{
    person.email = email;
    return person;
};
console.log(addEmail({name:"ARAM"},"aram@gmail"));
console.log(addEmail({name:"LILIT"},"lilit@email"));
*/

//Task 19. removeProperty(obj, key)
/*
function removeProperty(obj,key)
{
    delete(obj[key]);
    return obj;
};
console.log(removeProperty({name:"ANI", age: 23},"age"));
console.log(removeProperty({name: "ARAM", age:32},"name"));
*/

//Task 20. hasProperty(obj, key)
/*
function hasProperty(obj,key)
{
    return (key in obj);
};
console.log(hasProperty({name:"ANI", age:23},"age"));
console.log(hasProperty({color:"BLACK", length: 42},"length"));
console.log(hasProperty({number:7},"size"));
*/

//Task 21. countProperties(obj)
/*
function countProperties(obj)
{
    return (Object.keys(obj).length);
};
console.log(countProperties({name:"ANNA",age:23,number:145}));
*/

//Task 22. describeCar(car)

/*
function describeCar(car)
{
    return (car.brand + " " + car.model + " " +car.year);

};
console.log(describeCar({brand: "Toyota", model: "Camry", year: 2020}));
console.log(describeCar({brand: "BMW", model: "X6", year: 2022}));
*/

//Task 23. getCity(user)
/*
const user = {
  name: "Aram",
  address: { city: "Gyumri", street: "Abovyan 5" },
};
const user1 = {
    name: "Anna",
    address:{city:"YEREVAN",street:"ACAHRYAN 2/6"}
};

function getCity(user)
{
    return user.address.city;
};

console.log(getCity(user));
console.log(getCity(user1));
*/
