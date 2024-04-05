import "dotenv/config";
import connectDB from "./db/mongoConnect.js";

connectDB();



/*
;( async () => {
    try {
       await mongoose.connect( `${process.env.MONGO_URI}/${DB_NAME}` )
    } catch (error) {
        console.error("ERROR", error)
        throw error
    }
})()

*/