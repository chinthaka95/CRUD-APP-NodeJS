const mongoose = require('mongoose')
const validator = require('validator')

const employeeSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true
    },
    email:{
        type: String,
        required : true,
        unique:[true, "this email already exists"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("this Email is not valid")
            }
        }
    },
    number:{
        type:Number,
        required : true,
        min:11,
      
    },
    nic:{
        type: String,
        required : true
    },
    address:{
        type: String,
        required : true
    }
})


const employee = new mongoose.model('employee',employeeSchema);
module.exports = employee;