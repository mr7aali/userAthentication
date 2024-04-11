import app from "./app";
import config from "./config";

import mongoose from 'mongoose';


async function main() {
    try {
        await mongoose.connect(config.databaseUrl as string);
            console.log("🚀🚀 Database is connected successfully!");

        app.listen(config.port, () => {
            console.log(`🧑‍💻🧑‍💻 userAthentication app listening on port ${config.port}`)
        })
    }
    catch (err) {
        console.log("Database Error: fail to connect", err);
    }

}
main();