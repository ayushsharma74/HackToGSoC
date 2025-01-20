import mongoose, { Schema } from "mongoose"


interface UserDocument {
    name: string,
    email: string,
    password: string
}

const userSchema = new Schema<UserDocument>({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
})

export const User = mongoose.models?.User || mongoose.model<UserDocument>('User', userSchema)