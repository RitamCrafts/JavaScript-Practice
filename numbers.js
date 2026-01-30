let score=500;
let price=new Number(500);
console.log(score+price);
console.log(score);
console.log(price);
console.log(price===score);//false
console.log(typeof score, typeof price);//number object
console.log(score.toFixed(2));//500.00
console.log(34.4468.toFixed(3));// ok so it can round off 34.447
console.log(34.4468.toPrecision(1));//3e+1
console.log(34.4468.toPrecision(2));//34
console.log(34.4468.toPrecision(4));//34.45



//in math(obj) there is abs(), Math.pi, max(),min(),random()
console.log(Math.PI,Math.E);
// XXXXX Math.floor(Math.random()*range)+low;//range=high-low+1
const min=10;//inc
const max=20;//inc
console.log(Math.floor(Math.random()*(max-min+1))+min);






