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
const person4 =new Customers (3,'Esra','Abdirashid',+7865432,new Date);
const person5 =new Customers (3,'Esra','Abdirashid',+7865432,new Date);
const person6 =new Customers (3,'Esra','Abdirashid',+7865432,new Date);
const person7 =new Customers (3,'Esra','Abdirashid',+7865432,new Date);
const person8 =new Customers (3,'Esra','Abdirashid',+7865432,new Date);
const person9 =new Customers (3,'Esra','Abdirashid',+7865432,new Date);
const person9 =new Customers (3,'Esra','Abdirashid',+7865432,new Date);
const person9 =new Customers (3,'Esra','Abdirashid',+7865432,new Date);
const person9 =new Customers (3,'Esra','Abdirashid',+7865432,new Date);
const person9 =new Customers (3,'Esra','Abdirashid',+7865432,new Date);
console.log(person1,person2,person3)