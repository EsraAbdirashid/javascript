// filter

const numbers = [7,17,27,37,47,57,];
const filterNumbers = numbers.filter(Number=>{
        const result =Number <=37? "yes" :"No";
        console.log(result);
});

// map

const names = ["Mohamed" ,"Abdillahi" ,"Abdimudalib", "Abdimanaaf"];
const mapNames = names.map(name=>{
        return name.toLocaleUpperCase();
})
console.log(mapNames);

// Reduce

const reduceNumbers = numbers.reduce((total,number)=>{
        return total + number
})
console.log(reduceNumbers);

// foreach
const persons = [
        {
                id: "1",
                name: "Esra",
                address: "15aad",
                phone: "921236763"
        },
        {
                id:"2",
                name: "Hamda",
                address: "10aad",
                phone: "992914707"
        },
        {
                id: 3,
                name: "Avav",
                address: "14aaad",
                phone: "8975645342312"
        }
]
persons.forEach(person=>{
        console.log(person)
})