import mongoose from "mongoose"
const {MONGODB_URI} = process.env

export const connectDB = async () => {
    try {
        const {connection} = await mongoose.connect(MONGODB_URI as string)
        console.log("MongoDb connected", connection.port);
        if (connection.readyState === 1) {
            return Promise.resolve(true);
          }
    } catch (error) {
        console.log(error)
        return Promise.reject(error)
    }
}