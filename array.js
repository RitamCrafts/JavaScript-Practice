// Uncomment any one block at a time , also for side comments beside statement, usually 1st one is output and 2nd one is explaination or syntal, 3rd one is explaination

// let arr1=[1,2,3,true,"Hello",3,5,6,8];
// console.log(arr1);
// console.log(arr1.join());
// let arr2=arr1.join().split(',');
// // for(let i=0;i<arr2.length;i++){
// //     console.log(arr2[i].replaceAll(" ","@"));
// // }
// console.log(arr2);//there might be console formatting due to which they appear on different lines


// let arrIndex=new Array(10,11,12,13,14,15);
// console.log(arrIndex);
// console.log(Array(arrIndex));
// console.log();
// console.log(arrIndex.indexOf(14));
// console.log(arrIndex[2]);
// console.log();
// console.log(arrIndex[77]);//undefined
// console.log(arrIndex.indexOf(77));//-1


// let arrNew=[0,1,2,3,4,5,6,7];
// console.log(arrNew);
// console.log(arrNew.pop(),"pop");//7//pop() returns popped element
// console.log(arrNew);
// console.log(arrNew.push(8),"push");//8//push() returns new length of array
// console.log(arrNew);
// console.log(arrNew.pop(2));//8 //it removes last and not index 2 so argument not work with pop
// console.log(arrNew);
// /*How to remove any index then?*/
// console.log(arrNew.splice(2,1));//[ 2 ]//splice(<starting Index(inc)>,<no. of numbers to remove>) IMP, also it canges original array unlike slice
// console.log(arrNew);//[ 0, 1, 3, 4, 5, 6 ]
// console.log(arrNew.slice(1,4));//[ 1, 3, 4 ]//slice(<start index(inc)>,<end index(exc)>)
// console.log(arrNew);//[ 0, 1, 3, 4, 5, 6 ] // doesnt change original array


// let gamesOutdoor=["cricket","football","badminton","basketball"];
// let gamesIndoor=["chess","ludo","buisness","cards"];
// console.log(gamesOutdoor.push(gamesIndoor));//5//push() returns new length of array
// console.log(gamesOutdoor);//['cricket','football','badminton','basketball',[ 'chess', 'ludo', 'buisness', 'cards' ]]
// gamesOutdoor.pop();//popping the last element - [ 'chess', 'ludo', 'buisness', 'cards' ]
// /* to fix the arr nesting and add items properly,*/
// let gamesAll=[...gamesOutdoor,...gamesIndoor]
// console.log(gamesAll);//o/p below
// /*[
//   'cricket',
//   'football',
//   'badminton',
//   'basketball',
//   'chess',
//   'ludo',
//   'buisness',
//   'cards'
// ]*/


// let mapArray=[1,2,3,4,5,6];
// console.log(mapArray.map(x => x**2));//[ 1, 4, 9, 16, 25, 36 ]//map used like this transforms all elemrnts, good shortcut


// let otherArr=[1,2,3,4,5];
// console.log(otherArr.unshift(0));//6//returns new length 
// console.log(otherArr);//[ 0, 1, 2, 3, 4, 5 ]//increase index of all by 1 which is complex and then adds 0 at the start
// console.log(otherArr.shift());//0//basically a front pop
// console.log(otherArr);//[ 1, 2, 3, 4, 5 ]//pops first element and then decrease index of all by 1













