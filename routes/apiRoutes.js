//const notesData = require("../db/db");
const fs = require("fs");

module.exports = function(app){



    app.get("/api/notes", function(req,res){
        fs.readFile('./db/db.json', (err, data)=>{
            if (err) throw err;
            let notesData = JSON.parse(data);
            res.json(notesData[0]);
            console.log(notesData);
        });
       
    });


    app.post("/api/notes", function(req,res){
        notesData.push(req.body);
    });

    app.delete("/api/notes", function(req,res){
        notesData.push(req.body);
    });


}