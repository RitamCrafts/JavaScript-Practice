// OBJECTS
// - Singleton Object 
//     Object.create

// - Object literals below



const mySym=Symbol("Mykey1");//THIS IS NEEDED OR reference error
const JsUser={
    name: "Ritam",//by default the key is processed as string in the system
    "State,Country": "West Bengal, IN",
    key:"value",
    age:18,
    location:"kolkata",
    email:"ritamnotreal@xyz.com",
    isLoggedIn:false,
    [mySym]:Symbol("MyKey2"),//changed value

    /*[symbolNOTDeclaredBefore]:"Idk",//ReferenceError: symbolNOTDeclaredBefore is not defined*/
};

/*access*/
console.log(JsUser+"\n");

console.log(JsUser["email"]);//as email/key is processed as string
console.log(JsUser.name);//not needed here as it is accessed as a property
console.log(JsUser["State,Country"]);//it is the only way to access this, . notation wont work
console.log(JsUser[mySym],"\n"+typeof JsUser[mySym],"\n");


JsUser.email="ritam@mail.com";
console.log(JsUser.email);
Object.freeze(JsUser);
JsUser.email="AAAAAAAAAA@NANANANA.com";//no error it just wont propogate
console.log(JsUser);
console.log();console.log();console.log();console.log();console.log();







const JsUser2={
    name: "Souvik",//by default the key is processed as string in the system
    "State,Country": "West Bengal, IN",
    key:"value",
    age:18,
    location:"kolkata",
    email:"souviknotreal@xyz.com",
    isLoggedIn:true,
}
JsUser2.greeting=function(){
    console.log("hello JS user");
    return `${this.name} has logged in!`;//use 'this' to reference the current object
}
console.log(JsUser2.greeting);//[Function (anonymous)]//returns reference of function only, function is NOT run
console.log(JsUser2.greeting());//op below
/*hello JS user                         //this came when the function ran
Souvik has logged in!*/                 //this came when the function return value was logged



