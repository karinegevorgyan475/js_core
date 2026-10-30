//Task 24. getSecondName(students)

function getSecondName(person) {
  return person[1].name;
}

console.log(
  getSecondName([{ name: "Aram" }, { name: "Lilit" }, { name: "Davit" }]),
);
console.log(
  getSecondName([{ name: "ELEN" }, { name: "ANDRANIK" }, { name: "ANNA" }]),
);

//Task 25. getLastPrice(products)
/*
function getLastPrice(products) 
{
    return products.at(-1).price;
};

console.log(getLastPrice([
    { title: "Pen", price: 200 },
    { title: "Notebook", price: 900 },
]));

console.log(getLastPrice([
    { title: "Bread", price: 700 },
  { title: "Copybook", price: 1100 },
]));
*/

//Task 26. addSkill(person, skill)
/*
function addSkill (person,skill)
{
     person.skills.push(skill);
    return person.skills;
};

console.log(addSkill({name: "Ani", skills: ["HTML"] }, "CSS"));
console.log(addSkill({name: "LILIT", skills: ["HTML"] }, "JS"));
*/
//Task 27. countSkills(person)
/*
 function countSkills(person)
 {
    return person.skils.length;
 };

 console.log(countSkills({name:"ANI", skils:["HTML","JAVA SCRIPT","CSS","PYTON"]}));
 console.log(countSkills({name:"ANI", skils:["CSS","PYTON"]}));
 */

//Task 28. createBook(title, author, year) and bookInfo(book)

/*
 function createBook(title, author, year) {
    return {
        title: title,
        author: author,
        year: year
    };
}

function bookInfo(book) {
    return book.title + " " + "by"  + " " + book.author + " " + book.year ;
};

const book = createBook("Samvel", "Raffi", 1886);

console.log(bookInfo(book));
*/
