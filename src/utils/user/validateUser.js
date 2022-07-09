//utils
const isValidEmail = require("./isValidEmail");
const isValidName = require("./isValidName");
const isValidPassword = require("./registration/isValidPassword");

const validateUser = async (name, email, password, password_confirmation) => {
  //name validation
  await isValidName(name);

  //EMAIL validation
  await isValidEmail(email);

  //Password validation
  await isValidPassword(password, password_confirmation);
};

module.exports = validateUser;
