// const TinderUser1=new Object();
// console.log(TinderUser1);//{}

// const TinderUser2={};
// console.log(TinderUser2);//{}



const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
// console.log(regularUser.fullname?.userfullname.firstname);//the ? shecks if that value exists or not if exist, it will work else it wont like throw an error there




/*object concatinate*/
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

console.log({ obj1, obj2 }); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }//didn't work

console.log( Object.assign({}, obj1, obj2, obj3));//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
/*avove way, 1st argument is an empty object so that it is a new target object instead of obj1// Object.assign(target,other,other,.....)*/

console.log( {...obj1, ...obj2});//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
/*use above way*/


let objNew=Object.assign(obj1, obj2, obj3);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'I', '5': 'a', '6': 'b' }
objNew["4"]='I';//{ '3': 'a', '4': 'b' }//doesnt change obj2 but still use a empty targer to be safe
console.log(objNew);
console.log(obj2);

console.log();console.log();console.log();




// const users = [
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
// ]
// users[1].email




const tinderUser={};
tinderUser.id="123abc";
tinderUser.name="Arup";
tinderUser.isLoggedIn=true;
// console.log(tinderUser);

console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));//[ '123abc', 'Arup', true ]
console.log(Object.entries(tinderUser));//[ [ 'id', '123abc' ], [ 'name', 'Arup' ], [ 'isLoggedIn', true ] ]
console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true//checks if it has that property

console.log();console.log();console.log();




const course = {
    coursename: "js in hindi",
    price: "99999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course;//de-structuring
console.log(instructor);
//used in react




//JSON file \/
// {
//     "name": "hitesh",//key MUST be string here
//     "coursename": "js in hindi",
//     "price": "free"
// }


//API can come like this
[
    {},
    {},
    {}
]