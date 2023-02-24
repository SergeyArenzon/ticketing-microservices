import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import request from 'supertest';
import { app } from '../app';

declare global {
    function signin(): Promise<string[]>
}




let mongo: any;

beforeAll(async() => {
    process.env.JWT_KEY = "dfgdfgdg"
    mongo = await MongoMemoryServer.create();
    const mongoUri =  mongo.getUri();

    await mongoose.connect(mongoUri);
});

beforeEach(async ()=> {
    const collections = await mongoose.connection.db.collections();

    for (const collection of collections) {
        await collection.deleteMany({});
    }
});


afterAll(async ()=> {
    if (mongo) {
        await mongo.stop();
    }
    await mongoose.connection.close();

})

global.signin = async ()  => {
    // Build a JWT payload, {id, email}

    // Create the JWT!
    

}