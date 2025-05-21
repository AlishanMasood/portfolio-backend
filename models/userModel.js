import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      select: false, // Don't return password by default in queries
    },
    bio: {
      type: String,
      default: "",
    },
    avatar: {
      url: String,
      alt: String,
    },
    role: {
      type: String,
      enum: ["admin", "author", "guest"],
      default: "guest",
    },
    socialLinks: {
      github: String,
      twitter: String,
      linkedin: String,
      personalWebsite: String,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    resetToken: {
      type: String,
    },
    resetTokenExpiry: {
      type: Date,
    },
    provider: {
      type: String,
      enum: ["local", "google", "github"],
      default: "local",
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
