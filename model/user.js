const mongoose = require("mongoose");
const { stringify } = require('qs');

mongoose.connection.on("error", err => {
    console.error("몽고디비 연결 에러", err);
});

const UserSchema = new mongoose.Schema({
    insta_Id: String,
    name: String,
    password: String,
    friend_list: Array,
    profile_img: String,
});

UserSchema.virtual("userId").get(function () {
    return this._id.toHexString();
});

UserSchema.set("toJSON", {
    virtuals: true,
});

module.exports = mongoose.model("user", UserSchema)