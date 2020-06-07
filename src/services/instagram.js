const Instagram = require('instagram-web-api');

const { username, password } = process.env;

export const client = new Instagram({ username, password });

// client
//   .login()
//   .then(() => {
//     client
//       .getProfile()
//       .then(console.log)
//       .catch((e) => console.log({ e }));
//   })
//   .catch((e) => console.log({ e }));
