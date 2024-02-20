
import mongoose from "mongoose";
const dbConnection = async() => {
    const DB_URI = "mongodb+srv://devanshu1336:Devanshu1229@job-board.pmd93qc.mongodb.net/?retryWrites=true&w=majority"
    try {
        await mongoose.connect(DB_URI, {useNewUrlParser: true});
        console.log("Connection Successfull");
    } catch (error) {
        console.log('Error while connecting with the database', error.message);
    }
}

export default dbConnection;