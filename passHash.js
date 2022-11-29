const bcrypt = require('bcrypt');

async function hashPassword() {
  const myPassword = 'admin123.321';
  const hash = await bcrypt.hash(myPassword, 10);
  console.log(hash);
}

hashPassword();
