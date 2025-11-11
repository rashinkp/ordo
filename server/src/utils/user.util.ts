/**
 * Generate a custom user ID like:
 * USR_RASHIN_20251111_ABC123
 *
 * @param username - User's username
 * @param role - Either 'user' or 'admin'
 * @returns Generated userId string
 */
export const generateUserId = (
  username: string,
  role: "user" | "admin"
): string => {
  const date = new Date();
  const formattedDate = `${date.getFullYear()}${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}${date.getDate().toString().padStart(2, "0")}`;

  const randomSuffix = Math.random().toString(36).substring(2, 7).toUpperCase();

  const prefix = role === "admin" ? "ADM" : "USR";
  const cleanName = username.replace(/\s+/g, "").toUpperCase();

  return `${prefix}_${cleanName}_${formattedDate}_${randomSuffix}`;
};
