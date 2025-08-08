// import generateToken  from "../utils/generatetoken.js";
// import loginModal from "../models/loginModal.js";
// import { badRequest, invalidEmail} from "../utils/constant.js";
// import dotenv from 'dotenv'
// import { AppError } from "../utils/error.js";
const dotenv = require('dotenv')
const generateToken = require('../utils/generateToken.js')
const {AppError} = require('../utils/error.js')
dotenv.config()
const authService = async(email,username)=>{
        if (!email || !username) return({ status: 400, message: 'this is invaild email' })
       try {
        const {user_id, message,newuser , status} = await loginModal(email,username)
        const jwttoken =  generateToken(user_id);
        return {jwttoken,message,newuser,status};
       } catch (error) {
        throw new AppError({status:error.status,message:error.message})
       }
}
module.exports = authService