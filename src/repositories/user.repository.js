//Modules
const mongoose = require("mongoose");

//Models
const UserModel = mongoose.model("User");

//check if email already exists
const emailExistsRepository = async (email) => {
  const filter = {
    email: email,
  };
  const result = await UserModel.exists(filter);
  return result;
};

//Registers a user
const registerUserRepository = async (name, email, hashed_password) => {
  console.log(name, email, hashed_password);
  const user = new UserModel();

  user.name = name;
  user.password = hashed_password;
  user.email = email;

  console.time("\nUser save time");
  await user.save();
  console.timeEnd("\nUser save time");
};

module.exports = {
  registerUserRepository,
  emailExistsRepository,
};
