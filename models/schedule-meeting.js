import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    date:{
        type:String
    },
    time:{
        type:String
    }
});

const scheduleMeet = new mongoose.model("scheduleMeet",userSchema);
export default scheduleMeet;