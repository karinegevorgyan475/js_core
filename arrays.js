const arr1 = [1,2,3];
const arr2 = [6,7,5,4,-1];

//Task 1. getFirstAndLast(arr)

/*

function getFirstAndLast(arr)
{
    return [arr.at(0) ,arr.at(-1)];
};
console.log(getFirstAndLast(arr1));
console.log(getFirstAndLast(arr2));
*/


//Task 2. getLength(arr)
/*
function getLength(arr)
{
    return arr.length;
};
console.log(getLength(arr1));
console.log(getLength(arr2));
*/

//Task 3. addToEnd(arr, item)
/*
function addToEnd(arr,item)
{
     arr.push(item);
    return arr;
};

console.log(addToEnd(arr1,0));
console.log(addToEnd(arr2,7));
*/

//Task 4. addToStart(arr, item)
/*
function addToStart(arr,item)
{
    arr.unshift(item);
    return arr;
};
console.log(addToStart(arr1,3));
console.log(addToStart(arr2,"b"));
*/

//Task 5. removeLast(arr)
/*
function removeLast(arr)
{
    return arr.pop();
};
console.log(removeLast(arr1));
console.log(removeLast(arr2));
*/

//Task 6. hasItem(arr, item)
/*
function hasItem(arr,item)
{
    return (arr.includes(item));
};
console.log(hasItem(arr1,3));
console.log(hasItem(arr2,89));
*/

//Task 7. findPosition(arr, item)
/*
function findPosition(arr,item)
{
    return arr.indexOf(item);
};
console.log(findPosition(arr1,3));
console.log(findPosition(arr2,-1));
*/

//Task 8. joinWords(words)
/*
function joinWords(words)
{
    return words.join(" ");
};

console.log(joinWords(["I","LOVE","JS"]));
console.log(joinWords(arr1));
*/

//Task 9. firstThree(arr)
/*
function findTree(arr)
{
    return arr.slice(0,3); //0,1,2
};
console.log(findTree(arr1));
console.log(findTree(arr2));
*/

//Task 10. getMiddle(arr)
/*
function getMiddle(arr)
{
    return arr[Math.floor(arr.length/2)];
};
console.log(getMiddle(arr1));
console.log(getMiddle(arr2));
*/

//Task 11. countWords(sentence)
/*
function countWords(sentence)
{
    return sentence.split(" ").length; //bacat
};

console.log(countWords("HELLO WORLD!"));
console.log(countWords("I AM A LECTURER"));
*/

//Task 12. replaceAt(arr, index, value)
/*
function replaceAt(arr,index,value)
{
     arr[index] = value;
     return arr;
};
console.log(replaceAt(arr1,2,0));
console.log(replaceAt(arr2,0,10));
*/