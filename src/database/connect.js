import { mongoose} from 'mongoose'
const connection ={}
export const connectToDb = async () => {
try {
    if(connection.isConnected){
        console.log("Using existing connection")
        return;
    }
    else{
        const db = await mongoose.connect(process.env.MONGO_URI);
        connection.isConnected = db.connections[0].readystate;
    }

} catch (error) {
  throw new Error('Could not connect to database',error);
}
}