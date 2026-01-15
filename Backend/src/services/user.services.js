import { UserModel } from "../models/user.models.js";
const createUser = async ({ firstname, lastname, email, password }) => {
    console.log(firstname,lastname,email,password)
  if (!firstname || !email || !password) {
    throw new Error("All feilds are required");
  }
  const user = await UserModel.create({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
  });

  return user;
};

export default createUser;
