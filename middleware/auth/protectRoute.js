import jwt from "jsonwebtoken";
import userModel from "../../models/userModel.js";
import { responseObject } from "../../utils/responseObject/index.js";
export const protectRoute = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await userModel.findById(decoded.id);
      next();
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
  }
  if (!token) {
    return res
      .status(401)
      .send(responseObject("Not Authorized", 401, null, "Unauthorised"));
  }
};
