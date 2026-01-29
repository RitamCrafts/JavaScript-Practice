let s="Cricket";
let s2="Football";
console.log(s.length);
console.log(s.toLowerCase());

let gameName="Minecraft Bedwars";
console.log(gameName.charAt(3));//e
console.log(gameName.indexOf("r"));//5
console.log(gameName.indexOf("z"));//-1

console.log(gameName.substring(-15,4));//-15 is taken as 0, 4 exc,0 inc
console.log(gameName.slice(-9,4));//wont go reverse
console.log(gameName.slice(-15,4));//-ve indexing works
console.log(gameName.slice(2,4));//2 inc, 4 exc
let search="    How to read  "
console.log(newUrl=`https://www.google.com/search?q=${search.trim().replaceAll(" ","+")}`);//bad practice

console.log(newUrl.includes("https")?"secure":"not secure");//must be exact match






