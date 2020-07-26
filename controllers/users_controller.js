const { model } = require("mongoose");
// rendering the user profile page
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

}
// sign in and create a session for user
module.exports.createSession = function(req,res){

}