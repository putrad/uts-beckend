const express = require("express")
const app = express()
const port = 5000
const routerListfilm = require('./routers/Listfilm')


app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 



app.use(routerListfilm)

app.listen(port,()=>{
    console.log('server berjalan pada port' + port)
})