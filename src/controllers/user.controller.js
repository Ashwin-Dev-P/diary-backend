//import services
const user_service = require("../services/user.service");

const register_user_controller = async (req, res) => {
  const { name, email, password, password_confirmation } = req.body;

  const result = await user_service.registerUserService(
    name,
    email,
    password,
    password_confirmation
  );

  res.setHeader("Content-Type", "application/json");
  return res.status(result.status).json(result);
};

module.exports = {
  register_user_controller,
};
