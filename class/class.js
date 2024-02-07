class Customers{
        constructor(id, firstName, lastName, phone, dateTime){
                this.id = id;
                this.firstName = firstName;
                this.lastName= lastName;
                this.phone = phone;
                this.dateTime = dateTime;
        }
     
  

        getCustomers(){
                return `id:${this.id} firstName:${this.firstName} lastName:${this.lastName}
                phone:${this.phone}, dateTime:${this.dateTime}
                `
        }
}
const person1 =new Customers (1,'Esra','Abdirashid',+7865432,new Date);
const person2 =new Customers (2,'Esra','Abdirashid',+7865432,new Date);
const person3 =new Customers (3,'Esra','Abdirashid',+7865432,new Date);
const person4 =new Customers (4,'Esra','Abdirashid',+7865432,new Date);
const person5 =new Customers (5,'Esra','Abdirashid',+7865432,new Date);
const person6 =new Customers (6,'Esra','Abdirashid',+7865432,new Date);
const person7 =new Customers (7,'Esra','Abdirashid',+7865432,new Date);
const person8 =new Customers (8,'Esra','Abdirashid',+7865432,new Date);
const person9 =new Customers (9,'Esra','Abdirashid',+7865432,new Date);
const person10 =new Customers (10,'Esra','Abdirashid',+7865432,new Date);
const person11 =new Customers (11,'Esra','Abdirashid',+7865432,new Date);
const person12 =new Customers (12,'Esra','Abdirashid',+7865432,new Date);
const person13 =new Customers (13,'Esra','Abdirashid',+7865432,new Date);
console.log(person1,person2,person3,person4,person5,person6,person7,person9,person10,person11,person12,person13)