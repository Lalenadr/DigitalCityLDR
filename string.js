//string methods

// length geeft de lengte, het aantal tekens

let string = "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla"
let result = string.length 
console.log(result);

// positie aangeven waar een bepaald woord staat

let string2 = "bla bla bla bla miaaw bla bla miaaw bla"
let result2 = string2.indexOf("miaaw")
let result2a = string2.lastIndexOf("miaaw")
console.log(result2);
console.log(result2a);

// zoeken in een tekst

let string3 = "bla bla bla miaaw bla bla woef"
let resultaat = string3.search("miaaw")
console.log(resultaat);

//een deel van een tekst opzoeken

let string4 = "bla bla bla bla miaaw bla bla bla miaaw woef bla bla"
let result4 = string4.slice(5,12)
console.log(result4);

let result4a = string4.substring(5,12)
console.log(result4a);

// tekst vervangen - replace

let string5 = "deze tekst zal het woord miaaw vervangen door woef"
let result5 = string5.replace("miaaw","woef")
console.log(result5);

let stringreplace = "ma ma ma pi mama pi pi 55 74e"
let resultreplace = stringreplace.replace("ma","pa") //vervangt enkel de eerste
let resultreplaceall = stringreplace.replace(/ma/g,"pa") // vervangt ze allemaal
console.log(resultreplace);
console.log(resultreplaceall);

// alle tekst vervangen a-z

let numbers = "2323232323 sdadadasd 239849242894928 asdojaio 349834983 ADASDADASD ASD 34234234 dasdad"
resultx = numbers.replace(/([a-zA-Z])\w+/g,'WE ARE DEVELOPERS')
console.log(resultx);

// nummers vervangen

let numbers2 = "74545 miaaw 42254 woef"
let resultnumbers = numbers2.replace(/[0-9]/g,'test')
console.log(resultnumbers);

//hoofdletters en kleine letters

let tekst = "DIT ZIJN HOOFDLETTERS"
let resultaattekst = tekst.toLowerCase()
console.log(resultaattekst);
let tekstklein = "dit zijn kleine letters"
let klein = tekstklein.toUpperCase()
console.log(klein);

// tekst links of rechts verwijderen - trim trimleft trimright trimend

let voorbeeld = "     spaties     "
let resultaatvb = voorbeeld.trimLeft()
console.log(resultaatvb);

// tekst samenvoegen aan de hand van concat

let deel1 = "deze ";
let deel2 = "en deze";
let resultconcat = deel1.concat(deel2);
console.log(resultconcat);
let apart = deel1.concat(" en het nummer 25");
console.log(apart);

// charcode (ik weet het niet zeker? geeft het teken op die positie ofzo - character code wss)

let char = "tekst"
let reschar = char.charAt(2)
console.log(reschar);

// string omzetten naar array

let doorlopend = "een twee drie vier";
let stringToArray = doorlopend.split(" ");
console.log(stringToArray);
let a = "een,twee,drie,vier"
let sta = a.split(",")
console.log(sta);




