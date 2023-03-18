const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(
  "675151496262-pt9fgs8m496i6vpf7i97eo15h7k0khqg.apps.googleusercontent.com"
);

const validateGoogleAuth = () => {
  return async (req, res, next) => {
    try {
      const ticket = await client.verifyIdToken({
        idToken: req.body.credential,
        audience:
          "675151496262-pt9fgs8m496i6vpf7i97eo15h7k0khqg.apps.googleusercontent.com",
      });
      const payload = ticket.getPayload();
      req.user = {
        email: payload.email,
        name: payload.given_name,
      };
      next();
    } catch (err) {
      res.status(404).send("Not found");
    }
  };
};

module.exports = {
  validateGoogleAuth,
};
