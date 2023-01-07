import express from 'express'
import 'express-async-errors';
import { json } from 'body-parser'
import {currentUserRouter} from './routes/current-user'
import {signinRouter} from './routes/signin'
import {signupRouter} from './routes/signup'
import { signoutRouter} from './routes/signout'
import { errorHandler } from './middlewares/error-handler'
import { NotFoundError } from './errors/not-found'
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';




const app = express();
app.set('trust proxy', true);
app.use(json())
app.use(cookieSession({
    signed: false,
    secure: true,
}))

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all('*',async () => {
    throw new NotFoundError()
})

app.use(errorHandler);

const start = async() => {
    if(!process.env.JWT_KEY) throw new Error("No JWT_KEY foudn") 
    try {
        await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');
        console.log('Connected to mongodb...')
    } catch (error) {
        console.error(error)
    }
}


app.listen(3000,()=> console.log("SERVER ON 3000!!!!!!!!!"));
start();