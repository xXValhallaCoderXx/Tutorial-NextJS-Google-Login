const validateGoogleAuth = () => {
  return (req, res, next) => {
    const isValidated = true;
    console.log("DATA: ", req);
    // console.log("REQ HEADERS: ", req.headers)
    if (!isValidated) {
      res.status(400).send("Server requires application/json");
    } else {
      next();
    }
  };
};

module.exports = {
  validateGoogleAuth,
};
