import mongoose from "mongoose"

export const dbConnect=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true})
        console.log('db connected....')
    } catch (error) {
        console.log(error)
    }
}