let Items = ["javascript","TypeScript","React"];
let newItems = ["NodeJs","PostgreSQL","TailwindCss"]
let Person = [
    {id:1,name: "Hasi",address: "123Street"}
]
let newPerson =[
    { id:2,name: "Moumin",address: "456Street"},
    {id:3,name: "JigJiga",address: "789Street"}   
]
const getPerson = ()=>{
    return [...Person,newPerson]
}
let getData = getPerson();
console.log(getData);

// let result = [...Items, newItems];
// console.log(result);