const { JsonDB } = require("node-json-db");
const { Config } = require("node-json-db/dist/lib/JsonDBConfig");

const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

const db = new JsonDB(new Config("users", true, false, "/"));

const { validateGoogleAuth } = require("./middleware/google-auth-validate");

app.use(cors());
app.use(express.json());

/***************** Note ************************* 
    For the sake of this demo we are adding logic 
    in our controllers. In a real production 
    application - this should be added in the 
    services layer
*************************************************/

app.get("/api/login", validateGoogleAuth(), (req, res) => {
  res.json({ data: "helssssslo" });
});

/***************** Note ************************* 
    We are just using a JSON DB for simplicity 
*************************************************/

/***************** Note ************************* 
    I would suggest to use own JWT Tokens after
    you verify the Google token is authentic
*************************************************/

app.post("/api/auth/login", validateGoogleAuth(), async (req, res) => {
  try {
    const user = await db.getData(`/${req.user.email}`);
    res.json({ data: user });
  } catch (err) {
    // User does not exist - lets create
    db.push(`/${req.user.email}`, { email: req.user.email }, false);
    const user = await db.getData(`/${req.user.email}`);
    res.json({ data: user });
  }
});

app.get("/api/user/profile", validateGoogleAuth(), (req, res) => {
  res.json({ data: "helssssslo" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
