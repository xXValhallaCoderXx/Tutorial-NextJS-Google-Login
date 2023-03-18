const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

const { validateGoogleAuth } = require("./middleware/google-auth-validate");

app.use(cors());

/***************** Note ************************* 
    For the sake of this demo we are adding logic 
    in our controllers. In a real production 
    application - this should be added in the 
    services layer
*************************************************/

app.get("/api/login", validateGoogleAuth(), (req, res) => {
  res.json({ data: "helssssslo" });
});

app.get("/api/user/profile", validateGoogleAuth(), (req, res) => {
  res.json({ data: "helssssslo" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
