// rendering the about page
module.exports.about = function(req,res){
    return res.render('about',{
        title:"About"
    });
}