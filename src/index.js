
import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";


import connectDB from "./db/index.js";
dotenv.config({
    path:'./.env'
})
connectDB()
.then( () => {
    app.listen (process.env.PORT || 8000,() =>{
        console.log(`server is running at port :${process.env.PORT}`);
    })
})
.catch((err) =>{
    console.log("MANGO db connection failed !!!", err)
}
)


















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