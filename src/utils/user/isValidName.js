//shared utils
const shared_utils = require("../shared/index");
const isString = shared_utils.isString;
const isObject = shared_utils.isObject;
const throwError = shared_utils.throwError;

const isValidName = async (name) => {
  //name validation
  if (!name) {
    await throwError(400, "Please enter a name");
  } else if (!isObject(name)) {
    console.error("name is not an object", name);
    await throwError(500, "Something went wrong");
  } else {
    const { first_name, last_name } = name;

    //first name validation
    if (!first_name) {
      await throwError(400, "Please enter your first name");
    } else if (!(await isString(first_name))) {
      console.error("First name is not a string", first_name);
      await throwError(500, "Something went wrong");
    } else if (first_name.trim().length < 1) {
      await throwError(400, "Please enter your first name");
    }

    //last name validation
    if (last_name && !isString(first_name)) {
      console.error("First name is not a string", first_name);
      await throwError(500, "Something went wrong");
    }
  }
};

module.exports = isValidName;
