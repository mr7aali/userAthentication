import express, { Application, NextFunction, Request, Response } from 'express';
import cors from "cors";
import globalErrorHandler from './app/modules/middlewares/globalErrorHandler';
import router from './app/routes';
import mongoose from 'mongoose';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


console.log(app.get("env"));


//routes
app.use("/api/v1/", router);

//globalError handler
app.use(globalErrorHandler);
//testing
app.get('/', async (req: Request, res: Response) => {
  


  res.status(200).json({ message: '(Bismillahir Rahmanir Raheem) => serAthentication responsed successfully!' })

});

//not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: 'API not found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  })
})


export default app;