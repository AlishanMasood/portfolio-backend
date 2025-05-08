const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const dbConnection = await mongoose.connect(process.env.DB_URL);
    console.log(`✅ MongoDB connected: ${dbConnection.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error", error.message);
    process.exit(1);
  }
};

// Export the function
module.exports = connectDB;
