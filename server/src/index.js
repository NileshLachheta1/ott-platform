import express from 'express'
import Mongoose from 'mongoose';
import userRoutes from './router/user.routes.js';
import dotenv from "dotenv"
import cron from 'node-cron';
import { deactivateUsers } from './controllers/user.controller.js';
import { connectDB } from './db/index.js';

const app = express();
app.use(express.json());

dotenv.config({
    path: './.env'
})
connectDB().then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use('/api/users', userRoutes);
// Schedule the job to run every minute
cron.schedule('* * * * *', deactivateUsers);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
