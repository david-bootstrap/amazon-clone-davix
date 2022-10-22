//IMPORT FROM PACKAGES
const express = require("express");
const mongoose = require("mongoose");

//IMPORTS FROM OTHER FILES
const adminRouter = require("./routes/admin");
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

// INIT
const port = 3000;
const app = express();
const DB =
  "mongodb+srv://David:elle2022@cluster0.nufrj.mongodb.net/?retryWrites=true&w=majority";

//Middleware
// CLIENT -> SEVER -> CLIENT
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);

//Connections to database
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(port, "0.0.0.0", () => {
  console.log(`connected at port ${port}`);
});
