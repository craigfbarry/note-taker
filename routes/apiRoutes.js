const notesData = require("../db/db");

module.exports = function(app){

    console.log(notesData);

    app.get("/api/notes", function(req,res){
        res.json(notesData);
    });


    app.post("/api/notes", function(req,res){
        notesData.push(req.body);
    });


}