   let trimString = function (){
    const greetings  = "  function Up ";
    console.log(greetings.trim());
}

  let toLowerCase = function () {
    const greetings  = "HELLO WORLD";
    console.log(greetings.toLowerCase());
}

   let toUpperCase = function () {
    const greetings  = "hello world";
    console.log(greetings.toUpperCase());
}
module.exports.Trim = trimString
module.exports.Smallalpha = toLowerCase
module.exports.Bigalpha = toUpperCase
