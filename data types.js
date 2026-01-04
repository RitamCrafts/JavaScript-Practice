//JS is a dynamically typed language so it is not needed for us to manually assign datatypes and it id doesnt check datatypes at compile time only at runtime it check


//DATA TYPES
// 
//  Primitive Data Types (7 types)
//      String
//      Number
//      Boolean
//      null
//      undefined
//      Symbol (used for unique stuff)
//      BigInt
// 
//  Reference(non-primitive) Data types
//      Arrays
//      Objects
//      Functions


const score=100 // number
const newScore=100.3 //number
const isLoggedIn=false //boolean
const outsideTemp = null; //TYPE IS OBJECT WHEN TYPE OF USED
let hello; //value is undefined and datatype undefined

const id1=Symbol("123")
const id2=Symbol("123")
// console.log(id1 === id2); // false

const phno=99999999999999999999999999999999n;//n makes it big int so it wont display 1e+32
console.log(typeof phno,phno);




//non primitive data types

const array=[1,2,"3",5,4]


// functionObject() //DANGER ERROR not declared yet
say() // no error
const functionObject=function(){console.log("hello world");};//function defination
function say(){
    console.log("hello");
}
functionObject()
say()
console.log(typeof say,typeof functionObject);
//function is a object


//OBJECT
let myObj={
    name: "ritam",
    age: "18",
    marks: {
        phy:99,
        maths:97,
        comp:100,
    },
};
console.log(myObj.age);//18
console.log(myObj.marks);//{ phy: 99, maths: 97, comp: 100 }
console.log(myObj.marks.maths);//97

