var sanitize = require("mongo-sanitize");

//import repositories
const user_repository = require("../repositories/user.repository");
const { throwError } = require("../utils/shared");

//import utils
const user_utils = require("../utils/user/index");
const hash_password = require("../utils/user/registration/hashPassword");

//Registers user
const registerUserService = async (
  name,
  email,
  password,
  password_confirmation
) => {
  try {
    //Validate the user input
    await user_utils.validateUser(
      (name = name),
      (email = email),
      (password = password),
      (password_confirmation = password_confirmation)
    );

    //check if email is unique
    const emailExists = await user_repository.emailExistsRepository(email);
    if (emailExists !== null) {
      await throwError(400, "Email id already exists");
    }

    //hash the password
    const hashed_password = await hash_password(password);

    //sanitize the inputs to prevent NoSQL injection
    const sanitized_name = sanitize(name);
    const sanitized_email = sanitize(email);

    //Save the user to database
    await user_repository.registerUserRepository(
      sanitized_name,
      sanitized_email,
      hashed_password
    );

    const result = {
      message: "Registered successfully",
      status: 200,
    };
    return result;
  } catch (error) {
    console.error(error);
    result = {
      message: error.message || "Something went wrong",
      status: error.status || 500,
    };
    return result;
  }
};

module.exports = {
  registerUserService,
};
