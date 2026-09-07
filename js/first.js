/* const student = {
    fullName:"lochan.m",
    marks:93.9,
    printMarks: function () {
        console.log("marks =",this.marks);  
    }
};


const employee = {
    calcTax1(){
        console.log("tax rate is 10%");
    },
    calcTax2: function(){
        console.log("tax rate is 10%");
    }
};


const gagan = {
    salary:5000,
};

gagan.__proto__ = employee;


class ToytavCar{
    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }
    setBrand(brand){
        this.brandName = brand;
    }
}
let fortuner = new ToytavCar();


class Parent{
    hello(){
    console.log("hello");
    }
}
class Child extends Parent{}
let obj = new Child();


class Person{
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
    work(){
        console.log("do nothing")
    }
}


class Engineer extends Person{
    work(){
        console.log("solve problems, built something");
    }
}


class doctor extends Person{
    work(){
        console.log("treat patients");
    }
}


let lochanObj = new Engineer();

try{
    console.log("Person", Person);
}catch(err){
    console.log("err");
}*/