import mongoose from "mongoose";

const workSchema=new mongoose.Schema({
    heading:{
        type:String,
        required:[true,'Heading is required']
    },
    bannerPath:{
        type:String,
        required:[true,'enter bannerPath']
    },
    industry:{
        type:String,
        required:[true,'specify industry']
    },
    services:{
        type:String,
        required:[true,'specify services']
    },
    overview:{
        description:{
            type:String,
            required:[true,'enter description']
        },
        picturePath:{
            type:String,
            required:[true,'enter picturePath']
        }
    },
    challenges:[
        {
            picturePath:{
                type:String,
                required:true
            },
            content:{
                type:String,
                required:true
            }
        }
    ],
    benifits:{
        picturePath:{
            type:String,
            required:true
        },
        benifitList:{
            type:[String],
            required:true
        }
    }
},{timestamps:true})

export const Works=mongoose.models.works || mongoose.model("works",workSchema);