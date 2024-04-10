const mongoose = require('mongoose')
const connectDB = async()=>{
    try{
        const conn = await mongoose.connect('mongodb://localhost:27017/NotesApp')
        console.log(`Database Connected: ${conn.connection.host}`)
    } catch (error){
        console.log(error)
    }
}
module.exports = connectDB