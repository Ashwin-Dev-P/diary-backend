const isObject = async (input) => {
  if (typeof input === "object") {
    return true;
  } else {
    return false;
  }
};

module.exports = isObject;
