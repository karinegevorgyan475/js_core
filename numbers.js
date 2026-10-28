//1 compareFinite(value)․ վերադարձնել տեքստ, որը ցույց է տալիս երկու արդյունքները։

function compareFinite(value) {
  return (
    "isFinite:" +
    isFinite(value) +
    "|" +
    "NUmber.isFinite:" +
    Number.isFinite(value)
  );
}

console.log(compareFinite("15"));
console.log(compareFinite(15));
console.log(compareFinite(""));
console.log(compareFinite(null));
console.log(compareFinite(true));
console.log(compareFinite("abc"));
console.log(compareFinite(Infinity));
console.log(compareFinite(NaN));
console.log(compareFinite(undefined));
//Number.isFinite - վերադարձնում է true միայն այն դեպքում, երբ արժեքը վերջավոր թիվ է։
//isFinite- ստուգելուց առաջ արժեքը փոխակերպում է թվի։

//2 compareNaN(value)․ նույնը՝ isNaN vs Number.isNaN։
/*
function compareNan(value)
{
    return "isNan: "  + isNaN(value) + " | " + "Number.isNan: " + Number.isNaN(value); 
}
//isNan - նախ արժեքը փոխակերպում է թվի, հետո ստուգում՝ արդյոք այն NaN է։
//չի փոխակերպում արժեքի տիպը․ վերադարձնում է true միայն այն դեպքում, երբ արժեքն արդեն NaN է։

console.log(compareNan("15"));
console.log(compareNan(15));
console.log(compareNan("")); 
console.log(compareNan(null));
console.log(compareNan(true));
console.log(compareNan("abc"));
console.log(compareNan(Infinity));
console.log(compareNan(NaN));
console.log(compareNan(undefined));
*/

//3 isValidAge(value)․ true, եթե value-ն ամբողջ թիվ է 0-ից 150 միջակայքում։
/*
function isValideAge (value)
{
    return (value >= '0' && value <= '150');
};
console.log(isValideAge(155));
console.log(isValideAge(15));
console.log(isValideAge(-5));
*/

//4 roundTo(num, digits)․ կլորացնել և վերադարձնել number, ոչ string։
/*
function roundTo(num,digits)
{
    return Number(num.toFixed(digits));
};

console.log(roundTo(3.14547, 3));
console.log(roundTo(1.14525, 1));
console.log(roundTo(10.145444444, 4));
*/

//5 areEqual(a, b)․ համեմատել թվերը Number.EPSILON-ով։
/*
function areEqual (a,b)
{

    return Math.abs(a - b) < Number.EPSILON;
};

console.log(areEqual(0.1 + 0.2, 0.3)); 
console.log(areEqual(1000.1 + 1000.2, 2000.3)); 
//օրինակում թվերն ավելի մեծ են, և դրանց
 //ներկայացման սխալը կարող է գերազանցել Number.EPSILON-ը։
console.log(areEqual(12.3 + 14.5,26.8));
*/

//6 toBinary(n) և fromBinary(str)․ թիվ → երկուական տեքստ և հակառակը։
/*
function toBinary (n)
{
    return n.toString(2);
};

function fromBinary(str)
{
   return Number.parseInt(str, 2);
};


console.log(toBinary(10));
console.log(toBinary(9));
console.log(toBinary(110));

console.log(fromBinary("1010"));
console.log(fromBinary("1001"));
console.log(fromBinary("1101110"));
*/

//7 hexToDecimal(hex)․ CSS գույնի մասը թվի։
/*
function hexToDecimal(hex)  
{
    return Number.parseInt(hex,16);
};

console.log(hexToDecimal("fff"));
console.log(hexToDecimal("1a"));
console.log(hexToDecimal("2b"));
*/

//8 parsePrice(text)․ գինը գրավոր տեքստից։
/*
function parsePrice (text)
{
    return Number.parseFloat(text);
};
console.log(parsePrice("1500 AMD"));
console.log(parsePrice("20 $"));
console.log(parsePrice(" 19.99$"));

//tpum e 19
let tmp = Number.parseInt("19.99$");
console.log(tmp);

// vorovhetev parunakum e voch tvayin nshanner kam tarer dra hamar chi ashxatum
let text_to_number = Number("1500 AMD");
console.log(text_to_number); //Nan 

*/

//10 celsiusToFahrenheit(c)․ բանաձև՝ F = C × 9/5 + 32, արդյունքը մեկ նիշ տասնորդականից հետո։
/*
function celsiusToFahrenheit (C)
{
   let F = C * 9/5 + 32;
   return F ;
};
console.log(celsiusToFahrenheit(10));
console.log(celsiusToFahrenheit(100));
console.log(celsiusToFahrenheit(45));
*/

//11 formatMoney(amount)․ հազարավորները ստորակետով, վերջում դրամի նշանը։
/*
function  formatMoney(amount)
{
    return amount.toLocaleString("en-US") + "AMD";
};
console.log(formatMoney(2500000));
*/

//12 safeDivide(a, b)․ եթե արդյունքը վերջավոր թիվ է, վերադարձնել այն, այլապես "Հնարավոր չէ"։
/*
function safeDivide(a, b) {
    let result = a / b;
    return Number.isFinite(result) ? result : "hnaravor che";
}

console.log(safeDivide(10, 2)); 
console.log(safeDivide(10, 0));
console.log(safeDivide(0, 0));  
*/

//13 countDigits(n)․ ամբողջ թվի թվանշերի քանակը (բացասականը նույնպես)։
/*
function countDigits(n)
{
    return Math.abs(n).toString().length;
};

console.log(countDigits("123"));
console.log(countDigits(-907));
console.log(countDigits(1778454));
*/

//14 isSafe(n)․ ստուգել՝ թիվը ճշգրիտ ներկայացվում է՞։
/*
function isSafe(n)
{
    return Number.isSafeInteger(n);
};

console.log(isSafe(9007199254740991));
console.log(isSafe(9007199254740992)); // sa safe tveri mijakayqic durs e 
console.log(isSafe(9007199254740992 + 1)); //tvec false 
*/

// 16. isCorrectChange(paid, price, change)

/*
function isCorrectChange(paid, price, change) {
    return Math.abs((paid - price) - change) < Number.EPSILON;
}

console.log(isCorrectChange(1, 0.9, 0.1));   
console.log(isCorrectChange(0.3, 0.1, 0.2)); 
console.log(isCorrectChange(5, 2.5, 2));    
*/
