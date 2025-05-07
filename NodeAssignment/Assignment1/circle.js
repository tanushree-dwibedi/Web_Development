// module.exports = {
//   circle: function (radius) {
//     return Math.PI * radius * radius;
//   },
//   circumference: function (radius) {
//     return 2 * Math.PI * radius;
//   },        
// };


// circle.js

// Function to calculate area of a circle
function myarea(radius) {
    return Math.PI * radius * radius;
  }
  
  // Function to calculate circumference of a circle
  function mycircumference(radius) {
    return 2 * Math.PI * radius;
  }
  
  // Export the functions
  module.exports = {
    myarea,
    mycircumference
  };
  