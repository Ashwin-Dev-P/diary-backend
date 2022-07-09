const throwError = async (statusCode, message) => {
  error = new Error();
  error.status = statusCode || 500;
  error.message = message || "Something went wrong";
  throw error;
};

module.exports = throwError;
