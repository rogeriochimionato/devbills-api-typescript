import mongoose, { connect } from "mongoose";

export async function setupMongo(): Promise<void> {
    try {
        if(mongoose.connection.readyState == 1) {
            return;
        }

        console.log('... Conecting to DB ...');
        await mongoose.connect(process.env.MONGO_URL as string);
        console.log('--- DB connected! ---');
    } catch {
        throw new Error('!!! DB not connected !!!');
    }
}