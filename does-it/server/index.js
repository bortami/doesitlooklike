// server/index.js

const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" 
});

app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
// get driver connection
const dbo = require("./db/conn");

const PORT = process.env.PORT || 3001;
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });


app.listen(PORT, () => {
     // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server listening on ${PORT}`);
});
