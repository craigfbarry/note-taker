const path = require("path");

module.exports = function(app){

//HTML route for the notes page.

    app.get("/notes", function(req,res){
        res.sendFile(path.join(__dirname,"../public/notes.html"))
    });

//HTML route for the home page, this could redirect any incorrect routes in the browser.

    app.get("*", function(req,res){
        res.sendFile(path.join(__dirname,"../public/index.html"))
    });
};