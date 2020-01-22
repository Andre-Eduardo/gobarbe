import mongoose from 'mongoose'

const NotificationSchema = new mongose.Schema(
    {
        content:{
            type: String,
            required:true,
        },
        user:{
            type: Number,
            required: true,
        },
        read:{
            type: Boolean,
            required: true,
            default: false,
        },
        timestamps:true,
    }
)export default mongoose.model('Notification',NotificationSchema)