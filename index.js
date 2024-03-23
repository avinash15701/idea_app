const express = require('express')

const app = express()

//change json file to javascript file

app.use(express.json())

/**
 * Start the server
 */

app.listen(8000, ()=>{
    console.log("App start on the port no. 8000")
})

/**
 * Stitch the route 
 */

require("./Routes/ideas.routes")(app)