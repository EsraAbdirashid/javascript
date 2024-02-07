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
const person1 =new Customers (1,'Esra','Abdirashid',+7865432,new Date)
console.log(person1)