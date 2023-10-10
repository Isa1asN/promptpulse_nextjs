import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    email : {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email already exists"],
    },
    username : {
        type: String,
        required: [true, "Username is required"],
        match : [/^[a-zA-Z0-9]+$/, "Username is invalid"],
    },
    image : {
        type: String,
        default: "https://res.cloudinary.com/dq7l8216n/image/upload/v1620048469/share_prompt/default-user-image.png",
    }
});

const User = models.User || model("User", userSchema);
export default User;  
