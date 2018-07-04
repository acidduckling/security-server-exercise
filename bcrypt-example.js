const bcrypt = require('bcrypt-nodejs');

let pwHashed;
bcrypt.hash('bacon', null, null, (err, hash) => {
  console.log(hash);
  pwHashed = hash;
  // Store hash in your DB
});

bcrypt.compare('bacon', '$2a$10$BfOF8/2jlTWiBFbH4CDRoOOp0Dpu6ASqMxVaz4fTYDYtHVLfImxoW', (err, res) => {
  console.log(res);
});
