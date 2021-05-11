// object

let student = {
    naam: "Tom",
    achternaam: "Brol",
    leeftijd:25,
    hobbies: {
        games: ["een","twee"], // array in een object
        boeken: ["groen", "rood"]
    }
}

console.log(student.hobbies.games[0]);

let object = {
    onderdeel1: "waarde",
    onderdeel2: "waarde",
    objectinonderdeel: {
        arrayinobjectinobject: ["voorbeeld","andervoorbeeld"],
        nogeentje: [5,10]
    }
}

console.log(object.objectinonderdeel.nogeentje);

// tekst uit object of array in een zin of tekst plaatsen - 2 manieren

let output = "zijn naam is " + student.naam + " en hij is " + student.leeftijd
console.log(output);

//moderne manier

let outputmodern = `Door zo een backtick of hoe heet ook noemt kan ik hier ${student.naam} zijn naam zetten en de kleur ${student.hobbies.boeken[0]} zonder plusjes te moeten gebruiken`
console.log(outputmodern);