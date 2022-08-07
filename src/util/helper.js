 let printDate =   function () {
  const date = new Date();
  console.log(date.getDate());
}

    let printMonth =function () {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  console.log(months[date.getMonth()]);
}

   let getBatchInfo  =  function () {
    console.log(`Plutonium, W3D6, the topic for today is Nodejs module system`)
}
 module.exports.F1 = printDate
 module.exports.F2 = printMonth 
 module.exports.F3 =  getBatchInfo