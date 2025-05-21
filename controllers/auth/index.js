import userModel from "../../models/userModel.js";
import { hashPassword } from "../../utils/bcrypt/index.js";
import { responseObject } from "./../../utils/responseObject/index.js";
import jwt from "jsonwebtoken";
//response object attributes (message, status, data, error)
export const registerUser = async (req, res) => {
  const { name, username, email, password } = req.body;
  try {
    if (!name) {
      res
        .status(400)
        .send(responseObject("Name is required", 400, null, "Bad Request"));
      return;
    }
    if (!username) {
      res
        .status(400)
        .send(responseObject("Username is required", 400, null, "Bad Request"));
      return;
    }
    if (!email) {
      res
        .status(400)
        .send(responseObject("Email is required", 400, null, "Bad Request"));
      return;
    }
    if (!password) {
      res
        .status(400)
        .send(responseObject("Password is required", 400, null, "Bad Request"));
      return;
    }
    const checkExistsEmail = await userModel.findOne({ email });
    const checkExistsUsername = await userModel.findOne({ username });
    if (checkExistsEmail) {
      return res
        .status(409)
        .send(
          responseObject(
            "User with the email Already Exists",
            409,
            null,
            "Initial user exists"
          )
        );
    }
    if (checkExistsUsername) {
      return res
        .status(409)
        .send(
          responseObject(
            "User with the username Already Exists",
            409,
            null,
            "Initial user exists"
          )
        );
    }

    const hashed = await hashPassword(password);
    const user = await userModel.create({
      name,
      username,
      email,
      password: hashed,
    });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    const resData = {
      ...user._doc,
      token,
    };
    res
      .status(200)
      .send(responseObject("User Created Successfully", 200, resData));
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send(
        responseObject(
          "Internal Server Error",
          500,
          null,
          "Unable to register user"
        )
      );
  }
};
