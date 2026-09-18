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
} 



function getData(dataId) {
    setTimeout(()=>{
        console.log("data", dataId);
        if(getNextData){getNextData();}
    },2000);
}
getData(1,()=>{
    getData(2)
});


function api() {
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("wether data");
        resolve(200);
    },2000);
});    
}


function getData(dataId) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("sussccess");
        },2000)
    });
}
async function getAllData() {
    await getData(1);
    await getData(2);
    await getData(3);
}


const getFacts = async()=>{
    console.log("getting data.............");
    let response = await fatch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data);
}


function getFacts(){
    fetch(URL)
    .then((response)=>{
        return response.json();
    })

    .then((data)=>{
        console.log(data);
    })
}*/
 const BASE ~ URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

 const dropdowns = document.querySelectorAll(".dropdown select");
 const btn = document.querySelector("from button");
 const fromCurr = document.querySelector(".from select");
 const toCurr = document.querySelector(".to select");
 
for(let select of dropdowns){
     for (currCode in countryList){
// console.log(code, countryList(code));

 let newOption = document.createElement("option");
 newOption.innerText = currCode;

 newOption.value = currCode;

 if(select.name ==="from" && currCode ==="USD"){
    newOption.selected = "selected"
 }

 else  if(select.name ==="to" && currCode ==="INR"){
    newOption.selected = "selected"
 }

 select.append(newOption);
}
select.addEventListener("change",(evt)=>{
    updateFlag(evt.target);
});
}

const updateFlag = (element) =>{
    //console.log(element);
    let currCode = element.value;
    //console.log(currCode);
    let countryCode = countryCode[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

btn.addEventListener("click",async(evt)=>{
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amountVal = amount.value;
    //console.log("amtVal");
    if(amtVal === ""||amtVal<1){
        amtVal = 1;
        amount.value = "1";
    }
    //console.log(fromCurr.value,toCurr.value)
    const URL = `${BASE_URL}/${fromCurr.value.lowerCase()}/${toCurr.value.lowerCase()}`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[toCurr.value.toLowerCase()];
    console.log(rate);
    console.log(amount);
    let finalAmount = amtVal = rate;
    MessageChannel.innerText = `${amtVal}${fromCurr.value} = ${finalAmount}${toCurr.value}`;
});