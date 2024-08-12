import mongoose from "mongoose"; // Erase if already required

// Declare the Schema of the Mongo model
var exceciseSchema = new mongoose.Schema({
    username:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    duration:{
        type:Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

//Export the model
module.exports = mongoose.model('User', userSchema);