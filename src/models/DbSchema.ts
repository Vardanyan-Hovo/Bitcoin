import {models, model, Schema} from "mongoose"

const Itime = {
    updated : String,
    updatedISO : String,
    updateduk : String
}

const Ibpi = {
    USD : {
        "code" : String,
        "symbol" : String,
        "rate" : String,
        "description" : String,
        "rate_float" :Number
    },
    GBP : {
        "code" :String,
        "symbol" : String,
        "rate" : String,
        "description" : String,
        "rate_float" :Number
    },
    EUR : {
        "code" : String,
        "symbol" : String,
        "rate" : String,
        "description" :String,
        "rate_float" : Number
    }
}

//Schema of how to create or have in MongoDb
const DbSchema = new Schema({
    time: Itime,
    disclaimer: {
        type: String,
        required:false,
    },
    chartName: {
        type: String,
        required:false,
    },
    bpi: Ibpi
}, {timestamps: true}) // for see time


DbSchema.post('validate', function(doc){
    console.log("validate=[" + doc + "]");
})
const dbSchema = models?.bitcoinexchanges || model("bitcoinexchanges", DbSchema)

export default dbSchema;
