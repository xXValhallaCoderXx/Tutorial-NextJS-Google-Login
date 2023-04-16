const { OAuth2Client } = require("google-auth-library");

const client = new OAuth2Client(process.env.GOOGLE_AUTH_AUDIENCE);

function parseJwt(token) {
  return JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
}

const validateGoogleAuth = () => {
  return async (req, res, next) => {
    try {
      const ticket = await client.verifyIdToken({
        idToken: req.body.credential,
        audience: process.env.GOOGLE_AUTH_AUDIENCE,
      });
      const payload = ticket.getPayload();

      // const payload = parseJwt(req.body.credential);
      req.user = {
        email: payload.email,
        name: payload.given_name,
        lastName: payload.family_name,
        profilePicture: payload.picture,
      };
      next();
    } catch (err) {
      console.log("ERRO: ", err);
      res.status(404).send("Not found");
    }
  };
};

module.exports = {
  validateGoogleAuth,
};
