import mongoose from "mongoose";


const uri = process.env.ATLAS_URI

const connectToDB = async () => {
    await mongoose.connect(uri)
    .then(console.log('Connecting to DB'))
    .catch((error) => (console.log(error)))
}

export default connectToDB

    