import mongoose, {ObjectId, Schema} from "mongoose";

interface starredDocument {
  orgs: string
  starredBy: ObjectId 
}


const StarredSchmema = new Schema<starredDocument>({
    orgs : [{
        type: String
    }],
    starredBy: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    }
})

export const Starred = mongoose.model('Starred', StarredSchmema)