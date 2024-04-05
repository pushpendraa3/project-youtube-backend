import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log(`\n Yeaay!! connection to mongoDB atlas is successfull. DBHOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.error("mongoDB connection error");
        process.exit(1)
    }
}

export default connectDB;