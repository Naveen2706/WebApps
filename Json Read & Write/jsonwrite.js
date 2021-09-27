const fs = require("fs");

const users = require("./user.json");

let user = {
    name : "Naveen",
    age : 25,
    language : ["C,Java,JavaScript"]
};

users.push(user);

fs.writeFile("user.json",JSON.stringify(users),err => {
    if (err) throw err;
    console.log("Done writing");
 });