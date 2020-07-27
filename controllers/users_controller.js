const { model } = require("mongoose");
// rendering the user profile page
const User = require('../models/user');
const { use } = require("../routes");
// get the profile page
module.exports.profile=function(req,res){
    if(req.cookies.user_id){
        User.findById(req.cookies.user_id,function(err,user){
            if(user){
                return res.render('users',{
                    title:"user profile",
                    user:user

                });
            }else{
                return res.redirect('/users/sign-in');
            }
        })
    }else{
        return res.redirect('/users/sign-in');
    }
    
}
// rendering the sign in page
module.exports.SignIn=function(req,res){
    if(req.cookies.user_id!=null){
        return(res.redirect('back'));
    }
    return res.render('user_sign_in',{
        title:"Codial | Sign In"
    });
}
//rendering the sign up page 
module.exports.SignUp=function(req,res){
    if(req.cookies.user_id!=null){
        return res.end("Not allowed");
    }
    return res.render('user_sign_up',{
        title:"Codial | Sign Up"
    });
}
// get the sign up data
module.exports.create = function(req,res){
    console.log(req.body);
if(req.body.password!=req.body.confirmPassword){
    return res.end("Not allowed");
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

    console.log(req.body);
    User.findOne({email:req.body.email},function(err,user){
        if(err){
            console.log("Error in finding the user");
            return;
        }
        if(user){
            if(req.body.password!=user.password){
                return res.redirect('back');
            }
            res.cookie('user_id',user.id);
            return res.redirect('/users/profile');
        }else{
           return res.redirect('back');
        }
    })
}
// sign out user