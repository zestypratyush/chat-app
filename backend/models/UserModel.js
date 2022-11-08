const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserModel = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    pic: {
        type: String, 
        default: "https://cdn-icons-png.flaticon.com/512/1160/1160040.png?w=360",
    },
},{
    timestamps: true
})

UserModel.methods.matchPassword = async function (enteredPass){
    return await bcrypt.compare(enteredPass, this.password);
}

UserModel.pre('save', async function (next){
    if(!this.isModified){
        next()
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

const User = mongoose.model("User", UserModel);
module.exports = User;