// import { Application, Request, Response } from "express";
import express, { Application, Request, Response } from 'express';
import cors from "cors";
import router from './app/modules/users/user.route';
import globalErrorHandler from './app/modules/middlewares/globalErrorHandler';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("env");


//routes
app.use("/api/v1/user", router);

//globalError handler
app.use(globalErrorHandler);

//testing
app.get('/', (req: Request, res: Response) => {
    res.send('usrAthentication responsed successfully!')
})

export default app;