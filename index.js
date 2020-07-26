const express =require('express');
const cookieParser = require('cookie-parser');
// use express
const app = express();
const port = 8000;
const expressLayout = require('express-ejs-layouts');
// require mongoose
const db = require('./config/mongoose');
// set view engine
app.set('view engine','ejs');
app.set('views','./views');
// extract style and scripts from subpages to layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
app.use(cookieParser());
app.use(express.urlencoded());
// setting view for static files
app.use(express.static('./assets'));
// setting up layout
app.use(expressLayout);
// setting up router
app.use('/',require('./routes'));

// listen to port
app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server : ${err}`);
        return;
    }
    console.log(`Server is running on port : ${port}`);

});