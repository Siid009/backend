
import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";


import connectDB from "./db/index.js";
dotenv.config({
    path:'./.env'
})
connectDB()



















/*
import express from "express"
( async function () {
        try {
            await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
            app.on("error",() =>{
                console.log("ERR:",error)
            })
            app.listen(proxess.evn.PORT,() =>{
                console.log(`app is listening on port `)
            })

        }
        catch (error) {
            console.error("ERROR:", error);
            throw err;
        }
    })()
        */