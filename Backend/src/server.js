import app from "./app.js";
import connectToDB from "./db/db.js";

connectToDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(` server is running at port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("mongo db connection failed : ", err);
  });
