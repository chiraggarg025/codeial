const express =require('express');
// use express
const app = express();
const port = 8000;
const expressLayout = require('express-ejs-layouts');
// set view engine
app.set('view engine','ejs');
app.set('views','./views');
//Use router
app.use(expressLayout);
app.use('/',require('./routes'));

// listen to port
app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server : ${err}`);
        return;
    }
    console.log(`Server is running on port : ${port}`);

});