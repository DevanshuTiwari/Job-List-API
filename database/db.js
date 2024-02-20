

import mongoose from "mongoose";
const dbConnection = async(username,password) => {
    const DB_URI = `mongodb+srv://${username}:${password}@job-board.pmd93qc.mongodb.net/?retryWrites=true&w=majority`
    try {
        await mongoose.connect(DB_URI, {useNewUrlParser: true});
        console.log("Connection Successfull");
    } catch (error) {
        console.log('Error while connecting with the database', error.message);
    }
}

export default dbConnection;
