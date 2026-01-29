//JS is a dynamically typed language so it is not needed for us to manually assign datatypes and it id doesnt check datatypes at compile time only at runtime it check
// JS does NOT have a separate compile-time type checking phase


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
const functionObject=function(){console.log("hello world");};//function defination the variable only stores reference
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

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// MEMORY
//2 types of memory
//stack memory and heap memory
//all primitive data types are stored in stack memory(not guranteed). they behave like stack.
//all non-primitive data types are stored in heap memory(not guranteed). they behave like heap.
//during copy heap memory stuff aka non-primitive datatypes are pass by reference, during copy reference is passed
//during copy stack memory stuff aka primitive datatypes are pass by value, during copy a copy of the value is passed is passed

//deep copy is all inner stuff is copied (reference not copied only value)
//shallow copy is only 1st layer is copied (reference not copied only value), inner stuff is still reference
//to deep copy a non-primitive data you can use this function, it returns copy ---> structuredClone(<non-primitive data to be copied>)