const throwError = require("../shared/throwError");
const isString = require("../shared/isString");

const isValidEmail = async (email) => {
  if (!email) {
    await throwError(422, "Please enter an email id");
  } else if (!(await isString(email))) {
    console.error("Email must be a String type.", email);
    await throwError(422, "Something went wrong");
  } else if (!email.includes("@")) {
    await throwError(
      400,
      "Please enter a valid email id. A valid email id should contain a '@' symbol"
    );
  } else {
    const arr = email.split("@");

    if (arr.length !== 2) {
      await throwError(
        400,
        "Enter a valid email id. A valid email should contain a part before and after '@' symbol"
      );
    } else if (arr[0] == "" || arr.slice(-1) == "") {
      //To check if the '@' symbol is not at the left or right end of the email id
      await throwError(
        400,
        "Enter a valid email id. A valid email should contain a part before and after '@' symbol"
      );
    }
  }
};

module.exports = isValidEmail;
