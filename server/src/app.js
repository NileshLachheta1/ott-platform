import express from "express"

const app = express();

app.use(express.json());

//routes import
import indexRouter from './routes/index.route.js'

//routes declaration
app.use("/api",indexRouter)

export { app }