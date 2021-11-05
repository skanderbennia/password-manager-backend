// pbkdf2 is a hashing method that has a very good reputation appon the hashing password
// because it hash the password in iteration 100k of iterations
const crypto = require("crypto");

exports.hash = (password) => {
  const promise = new Promise((resolve, reject) => {
    const salt = crypto.randomBytes(16).toString("hex");
    crypto.pbkdf2(password, salt, 100000, 64, "sha512", (err, drivedkey) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(`${salt}.${drivedkey.toString("hex")}`);
    });
  });
  return promise;
};
exports.compares = (hashedpassword, password) => {
  const promise = new Promise((resolve, reject) => {
    const [salt, key] = hashedpassword.split(".");

    crypto.pbkdf2(password, salt, 100000, 64, "sha512", (err, drivedkey) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(key === drivedkey.toString("hex"));
    });
  });
  return promise;
};
