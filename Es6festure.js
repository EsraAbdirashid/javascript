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

const reduceNumbers = numbers
