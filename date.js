//jshint esversion:6

//VARIATION 1


// module.exports.getDate = getDate;
//
// function getDate(){
//   var today = new Date();
//   //var currentDate = today.getDay();
//   var options = {
//     weekday: 'long',
//     month: 'long',
//     day: 'numeric'
//   };
//   var day=today.toLocaleDateString("en-US",options);
//   return day;
// }
//
//
// module.exports.getDay = getDay;
// function getDay(){
//   var today = new Date();
//   //var currentDate = today.getDay();
//   var options = {
//     weekday: 'long'
//   };
//   var day=today.toLocaleDateString("en-US",options);
//   return day;
// }
//
// console.log(module.exports);


//VARIATION 2-->> Intermediate derivation to next step

// module.exports.getDate = getDate;
//
// var getDate = function(){
//   var today = new Date();
//   //var currentDate = today.getDay();
//   var options = {
//     weekday: 'long',
//     month: 'long',
//     day: 'numeric'
//   };
//   var day=today.toLocaleDateString("en-US",options);
//   return day;
// };
//
//
// module.exports.getDay = getDay;
// var getDay = function(){
//   var today = new Date();
//   //var currentDate = today.getDay();
//   var options = {
//     weekday: 'long'
//   };
//   var day=today.toLocaleDateString("en-US",options);
//   return day;
// };
//
// console.log(module.exports);


//VARIATION 3

module.exports.getDate =  function(){
  const today = new Date();
  //var currentDate = today.getDay();
  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  };

  return today.toLocaleDateString("en-US",options);
};


module.exports.getDay = function(){
  var today = new Date();
  //var currentDate = today.getDay();
  var options = {
    weekday: 'long'
  };
  
  return today.toLocaleDateString("en-US",options);
};
