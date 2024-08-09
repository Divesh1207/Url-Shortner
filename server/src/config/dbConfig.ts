import mongoose from "mongoose";
const connectDb = async () => {
    try {
        const connect = await mongoose.connect(`${process.env.CONNECTION_STRING}`)
        console.log('Database is connceted:',
            connect.connection.host,
            connect.connection.name)
    } catch (error) {
        console.log("Database is not connected", error)
    }

}

export default connectDb