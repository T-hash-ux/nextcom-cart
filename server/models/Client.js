//Creating a schema that will be wrapped using mongoose
//Clients will have a name, email and phone number 

const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
});

module.exports = mongoose.model('Client', ClientSchema);

//Client schema is now available for use