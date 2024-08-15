import app from "./app";
import config from "./config";
import { Server } from "http"
import mongoose from 'mongoose';


process.on("uncaughtException", err => {
    console.log("uncaughtException is detected !", err);
    process.exit(1);
})
let server: Server;
async function MyServer() {

    try {
        await mongoose.connect(config.databaseUrl as string);
        console.log("🚀🚀 mongoDB is connected successfully!");

        server = app.listen(config.port, () => {
            console.log(`🧑‍💻🧑‍💻 settleAccount server listening on port ${config.port}`)
        })
    }
    catch (err) {
        console.log("Database Error: fail to connect", err);
    }
    process.on("unhandledRejection", error => {
        if (server) {
            server.close(() => {
                console.log(error);
                process.exit(1)
            })
        }
        else {
            process.exit(1)
        }
    })

}
MyServer();


// console.log(x);
process.on("SIGTERM", () => {
    console.log("SIGTERM is received!");
    if (server) {
        server.close();
    }
})