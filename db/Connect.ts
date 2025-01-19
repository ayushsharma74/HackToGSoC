import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect("")
        console.log("MongoDb connected", connectionInstance.connection.port);
        
    } catch (error) {
        console.log(error)
    }
}