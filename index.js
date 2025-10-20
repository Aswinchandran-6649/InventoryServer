//inport json-server
const jsonServer = require('json-server')

//create server instance
const GardenServer = jsonServer.create()

//tell json-server to use db.json as data source
const router = jsonServer.router('db.json')

//add usefull middleware
const middleware = jsonServer.defaults()

//tell the server to use router and middleware
GardenServer.use(middleware)
GardenServer.use(router)


//set the port, if locally running use port 3000
const PORT = process.env.PORT || 3000

//define the port in which server has to run
GardenServer.listen(PORT, ()=>{
    console.log(`rbServer running at port ${PORT} and waiting for client request...`);
    
})

//in package.json, in scripts change test to, "start": "node index.js"