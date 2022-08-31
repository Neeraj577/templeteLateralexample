let name1 = "David";
let user = prompt("Enter Your GoodName.");

let name2 = "Nick";

let names = `${name1} is the original Name 
            and ${name2} is the nickName
             used recently 
             thanks ${user} for visiting my website.`;

console.log(names);
document.getElementById("app").innerText = names;
