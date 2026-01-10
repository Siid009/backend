import express from 'express'
import cookieParser from 'cookie-parser'
import cros from "cors"
const app= express() 


app.use(cros({
    origin:process.env.CORS_ORIGIN,
    Credential:true
}))

app.use(express.json({liit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))

app.use(express.static("public"))
export { app }