import bcrypt from "bcryptjs";

/**
 * Hashes a plain password
 * @param {string} password
 * @returns {Promise<string>} hashed password
 */
export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

/**
 * Compares raw and hashed password
 * @param {string} rawPassword
 * @param {string} hashedPassword
 * @returns {Promise<boolean>}
 */
export const comparePasswords = async (rawPassword, hashedPassword) => {
  return await bcrypt.compare(rawPassword, hashedPassword);
};
