import mongoose from "mongoose"


const Connection=async (username, password)=>{
    const URL=`mongodb://${username}:${password}@ac-o8ljimu-shard-00-00.oeodpdz.mongodb.net:27017,ac-o8ljimu-shard-00-01.oeodpdz.mongodb.net:27017,ac-o8ljimu-shard-00-02.oeodpdz.mongodb.net:27017/?ssl=true&replicaSet=atlas-14ch10-shard-0&authSource=admin&retryWrites=true&w=majority`


    try{
        await mongoose.connect(URL,{useUnifiedTopology:true, useNewURLParser:true} )
        console.log('database connected')
    }
    catch(error){
        console.log("error while running the datbase", error)

    }
}
export default Connection;