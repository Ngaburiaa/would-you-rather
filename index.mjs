import express from "express"
import cors from "cors"
import routes from "./src/router/routes.mjs"

const app = express()
app.use(cors())

app.use(routes)

app.listen(3000,()=>
console.log("running veryy well"))