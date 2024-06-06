
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    },
    ottPlatform: {
        type: String,
        enum: ["Netflix", "Amazon Prime", "Hotstar"]
    }
});

const User = mongoose.model('User', userSchema);
export default User;
