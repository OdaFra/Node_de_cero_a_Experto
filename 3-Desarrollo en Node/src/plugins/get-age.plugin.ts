// const getAgePlugin = require("get-age");

export const getAge = (birthdate:string) => {
  // if (!birthdate) return new Error("Birthdate is required");
  return new Date().getFullYear() - new Date(birthdate).getFullYear() 
  // getAgePlugin(birthdate);
};

// module.exports = {
//   getAge,
// };
