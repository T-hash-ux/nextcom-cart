const jwt = require('jsonwebtoken');

//webtoken will be available for 2 hours 
const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

//for our sign in token we want our email, name, id, and phone number to be apart of our token
module.exports = {
  signToken: function ({ email, name, _id, phone }) {
    const payload = { email, name, _id, phone};
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
