console.log(new Date());//obj // current
console.log(Date.now());//in ms //current
// ms starts from 1st jan 1970

//interchange between the 2
console.log(new Date().getTime());
console.log(new Date(Date.now()));
console.log();


//set date
console.log(new Date("2025-12-31"));//UTC "YYYY-MM-DDTHH:mm:ss"
//or
console.log(new Date(2025,11,31));//LOCAL TIME
//or
console.log(new Date(Date.UTC(2025,11,31)));//UTC TIME
console.log();console.log();

const testDate=new Date();
console.log(testDate.toDateString());
console.log(testDate.toLocaleString());
console.log(testDate.toLocaleDateString());
console.log(testDate.toJSON());
console.log(testDate.toString());
console.log(testDate.toTimeString());
console.log(testDate.toUTCString());
console.log(testDate.toLocaleTimeString());
console.log();console.log();

const utcDate = testDate.toLocaleString("en-US", {
  timeZone: "UTC",//ctrl+ space to see what can be given
  hour12: false
});
const inUtcDate = testDate.toLocaleString("in-US", {
  timeZone: "UTC",//ctrl+ space to see what can be given
  hour12: false
});
console.log(utcDate);
console.log(inUtcDate);
//locale string has many display options

