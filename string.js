//1

var str = "hELLO WORLD";

function capitalize(str1) {
  return str1.at(0).toUpperCase(str1) + str1.slice(1).toLowerCase();
}

console.log(capitalize(str));
console.log(capitalize("mY NAME IS ANN"));
console.log(capitalize("i AM ARMENIAN"));

//2 getInitials(fullName)․ անուն-ազգանունից ստանալ սկզբնատառերը։
/*
function getInitials (name)
{
    let index = name.indexOf(" ");
    let start = name.at(0).toUpperCase(name)
    let end = name.at(index + 1).toUpperCase(name);
    return (start + "." + end + "."); 

}

 console.log(getInitials ("karine gevorgyan")); 
 console.log(getInitials ("anna vardanyan"));
 console.log(getInitials ("narek hayrapetyan"));
*/

//3 getLastChar(str)․ վերջին նիշը երկու տարբերակով՝ at-ով և length-ով։
/*
function getLastChar(str) 
{
    return str.at(-1);
};



function lengthGetLastChar (name)
{
return name.at(name.length - 1); 
};

console.log(getLastChar("Hi!"));
console.log(getLastChar("planet"));
console.log(getLastChar("Computer"));

console.log(lengthGetLastChar ("Hi!"));
console.log(lengthGetLastChar ("planet"));
console.log(lengthGetLastChar ("Computer"));
*/

//4 makeSlug(title)․ վերնագրից ստանալ URL-ի համար slug։
/*
function makeSlug (title)
{
let slug = title.trim();
    slug = slug.toLowerCase();
    slug = slug.replaceAll(" ","-");
    return slug;
};

console.log(makeSlug("this is java"));
console.log(makeSlug(" Hello World i am Ann"));
console.log(makeSlug("My name is Anna"));
*/

//5 getUsername(email) և getDomain(email)․ email-ից առանձնել @-ից առաջ և հետո մասերը։
/*
function getUsername(email)
{
    let index = email.indexOf("@");
    return email.slice(0,index); 
};

function getDomain (email)
{
    let index = email.indexOf("@");
        return email.slice(index+1);
}
console.log(getUsername("karine@gmail"));
console.log(getDomain("karine@gmail"));
*/

//6 - getExtension(fileName)․ ֆայլի ընդլայնումը։
/*
function getExtension ( fileName ) 
{
    let index = fileName.lastIndexOf(".");
    return fileName.slice(index + 1);
}

console.log(getExtension("ap3.hhh.png"));
console.log(getExtension("ap1.cdd.jpg"));
console.log(getExtension("ap2.gcc.c"));
*/

//7 isImage(fileName)․ true, եթե ֆայլը վերջանում է .png կամ .jpg-ով (մեծատառ/փոքրատառ անկախ)։
/*
function isImage( fileName)
{   
    fileName = fileName.toLowerCase();
    return (fileName.endsWith(".png") || fileName.endsWith(".jpg"));
};

console.log(isImage("image.jpg"));
console.log(isImage("file.exe"));
console.log(isImage("file.png"));
*/

//8 maskCard(cardNumber)․ թողնել միայն վերջին 4 թվանշը։
/*
function maskCard (cardNumber)
{ let lastFour = cardNumber.slice(-4);
    return lastFour.padStart(cardNumber.length,"*");
};
console.log(maskCard("123456789101112"));
*/

//10 countChar(text, char)․ քանի անգամ է հանդիպում նիշը:
/*
function countChar(text,char)
{
    return text.split(char).length-1;
};
console.log(countChar("banana","a"));
console.log(countChar("Hello","l"));
console.log(countChar("recording","r"));
*/

//11 censor(text, word)․ բառը բոլոր տեղերում փոխարինել այնքան *-ով, որքան բառի երկարությունն է։
/*
function censor (text,word)
{
    return text.replaceAll(word,"*".repeat(word.length));
};
console.log(censor("bad day bad mood","bad"));
*/

// 12  formatTime(hours, minutes) միշտ երկունիշ ձևաչափով։
/*
function formatTime(hours, minutes) {
    return String(hours).padStart(2, "0") + ":" + String(minutes).padStart(2, "0");
}

console.log(formatTime(9, 5));   
console.log(formatTime(14, 30)); 
console.log(formatTime(8,10));
*/

// 13. sameText(a, b), համեմատել երկու տեքստ՝ անտեսելով մեծատառերը և եզրային բացատները։
/*
function sameText(a, b) {
    return a.trim().toLowerCase() === b.trim().toLowerCase();
}

console.log(sameText(" Yerevan", "YEREVAN ")); 
console.log(sameText("hayastan","HAYASTAN"));
console.log(sameText("CHINA  ","china"));
*/

// 14. charCodeInfo(char). վերադարձնել տեքստ՝ նիշի կոդով և հաջորդ նիշով։
/*
function charCodeInfo(char) {
    let code = char.charCodeAt(0);  //nishi tvayin kody
    let next = String.fromCharCode(code + 1);

    return `${char}-ի կոդը ${code} է, հաջորդը՝ ${next}`;
}

console.log(charCodeInfo("A")); 
console.log(charCodeInfo("B"));
console.log(charCodeInfo("C"));
*/
