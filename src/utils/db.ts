import mongoose from "mongoose";

try {
    const dbURL = process.env.DB_URL;
    const dbName = process.env.DB_NAME;
    mongoose.connect((dbURL as string) + (dbName as string));
} catch (error) {
    console.log(error);
}