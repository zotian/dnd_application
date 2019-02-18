const mongoose = require("mongoose");

mongoose.set('useCreateIndex', true);

const Schema = mongoose.Schema;

const user = new Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required:true
    }
})

var User = mongoose.model("User", user);
module.exports = User;


