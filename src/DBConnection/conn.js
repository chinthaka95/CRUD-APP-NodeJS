const { default: mongoose } = require("mongoose")


mongoose.connect("mongodb://0.0.0.0:27017/employee")
.then(()=>{
    console.log("Connection is setup successfully")
}).catch((err)=>{
    console.log("Connection is no setup successfully")
    console.log(err)
})