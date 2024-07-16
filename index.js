// HOW TO CREATE A NEW CLASS 

class Person {
    // IF WE WANT WE CAN PUT STATIC VALUE IN HERE LIKE THIS 
    // name = "Rashed";
    // email = "Rashed@gmail.com"
    
    constructor (name, email){
        this.name = name,
        this.email = email
    }
}

const newPerson = new Person ("Rashed", "Rashed@gmail.com")


// NEW CLASS WITH METHOD
class Student {
    constructor (id, name, result){
        this.id = id,
        this.name = name,
        this.result = result
    }

    // METHODS 

    getResult(){
        return this.result
    }
}

const newStudent = new Student (1, "Rashed", "A")
console.log(newStudent.getResult())

// NEW CLASS WITH METHOD And Private Property
class PrivateStudent {
    constructor (id, name, result){
        this.id = id,
        this.name = name,
        this._result = result
    }

    // METHODS 

    getResult(){
        return this._result
    }
}

const privateStudent = new Student (1, "Rashed", "A")
console.log(privateStudent.getResult())



// PRIVATE METHODS 
class Customer {
    constructor(email, name, orderCount){
        this.email = email,
        this.name = name,
        this.orderCount = orderCount
    }


    sendEmail (message){
        console.log("TO:", this.email)
        console.log(this._sanitizeEmail(message))
    }

    // METHOD 
    _sanitizeEmail(message){
        return message.toLowerCase()
    }

}

const newCustomer = new Customer("rashed@gmail.com", "Rashed", 21)

newCustomer.sendEmail("Hello")



// OOP GETTER SETTER 
class Product {
    constructor(id, price, stockCount){
        this._id = id
        this.price = price
        this._stockCount = stockCount
    }

    // GETTER 
    get stock(){
        return this._stockCount
    }


    // SETTER 
    set stock(value){
        if(value > 100){
            console.log("Value can not be grater then 100")
             return};
        console.log(value)
        this._stockCount = value
    }

}


// TO STRING METHOD 
// TO STRING METHOD HELP TO OVERRIDE THE MAIN RETURN STATEMENT
class Mobile {
    constructor (id, brand, color, imei){
        this._id = id, 
        this.brand = brand
        this.color = color
        this._imei = imei
    }

    toString(){return `mobile: {brand: ${this.brand}, color: ${this.color}}` }
}

const newMobile = new Mobile(1, "Honor", "green", 123)
console.log(newMobile + "")


//STATIC METHOD IN A OBJECT
class Laptop {
    constructor(brand, color){
        this.brand = brand,
        this.color = color
    }

    static compare(object1, object2) {

        if(object1.brand == object2.brand) return true
        return false

    }

    static hasRights(bool){
        if(bool == "Yes"){
            console.log("Object Created")
            return true
        }else{
            console.log("Do not have the right to create the object"            )
            return false
        }
    }
}


let laptop3 = null

if(Laptop.hasRights("Yes")){
    laptop3 = new Laptop("Hp", "Sliver")
}

console.log(laptop3)