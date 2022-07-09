const throwError = require("../../shared/throwError");
const isString = require("../../shared/isString");

const isValidPassword = async (password, password_confirmation) => {
  if (!password) {
    await throwError(422, "Please enter a password");
  } else if (!password_confirmation) {
    await throwError(422, "Please enter a password confirmation");
  } else if (!(await isString(password))) {
    console.error("Password is not a string");
    await throwError(500, "Something went wrong");
  } else if (!(await isString(password_confirmation))) {
    console.error("password_confrimation  is not a string");
    await throwError(500, "Something went wrong");
  } else if (password !== password_confirmation) {
    await throwError(400, "Both the passwords do not match");
  } else if (password.length < 8) {
    await throwError(
      400,
      "Password should have a minimum length of 8 characters"
    );
  }
};

module.exports = isValidPassword;
