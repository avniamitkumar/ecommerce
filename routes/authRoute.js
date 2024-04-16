import express from 'express'
import {registerController , loginController , testController, forgotPasswordController, updateProfileController} from "../controllers/authController.js";
import { requireSignIn ,isAdmin} from '../middlewares/authMiddleware.js';
//router object
const router=express.Router()
//routing
//REGISTER || METHOD POST
router.post('/register',registerController)

//LOGIN || POST
router.post('/login',loginController)

//test routes
router.get('/test',requireSignIn,isAdmin ,testController)
//forgot password || post
router.post("/forgot-password",forgotPasswordController);

//protected route auth
router.get("/user-auth" ,requireSignIn ,(req,res) =>{
    res.status(200).send({ok:true});
})

//protected route admin auth
router.get("/admin-auth" ,requireSignIn ,isAdmin,(req,res) =>{
    res.status(200).send({ok:true});
})
//update profile
router.put('/profile',requireSignIn,updateProfileController)
export default router