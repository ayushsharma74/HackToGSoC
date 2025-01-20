import mongoose, {ObjectId, Schema} from "mongoose";

interface StarredDocument {
  orgs: string
  starredBy: ObjectId 
}


const StarredSchmema = new Schema<StarredDocument>({
    orgs : [{
        type: String
    }],
    starredBy: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    }
})

const Starred = mongoose.models.Starred || mongoose.model<StarredDocument>('Starred', StarredSchmema)
export default Starred