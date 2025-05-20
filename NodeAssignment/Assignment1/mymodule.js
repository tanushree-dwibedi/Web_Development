// mymodule.js
module.exports = {
    getFullName: function (firstName, middleName, lastName) {
      return `${firstName} ${middleName} ${lastName}`.trim();
    },
  
    calculateAge: function (dob) {
      let [day, month, year] = dob.split('-').map(Number);
      let birthDate = new Date(year, month - 1, day);
      let today = new Date();
      
      let age = today.getFullYear() - birthDate.getFullYear();
      
      // Adjust if the birthday hasn't occurred this year
      let hasHadBirthday =
        today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
      
      if (!hasHadBirthday) {
        age--;
      }
      
      return age;
      
    },
  
    futureAge: function (currentAge) {
      return currentAge + 24;
    }
  };
  