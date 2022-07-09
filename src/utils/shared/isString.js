const isString = async (input) => {
  if (typeof input === "string" || input instanceof String) {
    return true;
  } else {
    return false;
  }
};

module.exports = isString;
