const { model } = require("mongoose");
// rendering the user profile page
const User = require('../models/user');
const { use } = require("../routes");
module.exports.profile=function(req,res){
    return res.render('users',{
        title:"Profile"
    });
}
// rendering the sign in page
module.exports.SignIn=function(req,res){
    return res.render('user_sign_in',{
        title:"Codial | Sign In"
    });
}
//rendering the sign up page 
module.exports.SignUp=function(req,res){
    return res.render('user_sign_up',{
        title:"Codial | Sign Up"
    });
}
// get the sign up data
module.exports.create = function(req,res){
    console.log(req.body);
if(req.body.password!=req.body.confirmPassword){
    return res.redirect('back');
}
User.findOne({email:req.body.email},function(err,user){
    if(err){
        console.log("Error in finding the user");
    }
    if(!user){
        User.create(req.body,function(err,user){
            if(err){
                console.log("error in creating the user");
                return;
            }
            return res.redirect('/users/sign-in');
        });
    }else{
        return res.redirect('back');
    }
});
}
// sign in and create a session for user
module.exports.createSession = function(req,res){

}