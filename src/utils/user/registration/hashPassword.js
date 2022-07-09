//Hashing password
const bcrypt = require("bcryptjs");
const saltRounds = Number(process.env.SALT_ROUNDS);

const hashPassword = async (password) => {
  //Asynchronous salt generation
  const salt = await bcrypt.genSalt(saltRounds);

  //Synchronous hashing
  const hash = await bcrypt.hashSync(password, salt);

  return hash;
};

module.exports = hashPassword;
