const bcrypt = require('bcrypt');

async function verifyPassword() {
  const myPassword = 'admin123.321';
  const hash = '$2b$10$dvKWSXf/27Gz2BVk3U29Rut0nWUHnReI3W0z2ETobiKgNdjb9F3la';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword();
