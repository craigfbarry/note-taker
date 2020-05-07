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
        //fs.appendFile("/db/db.json", req, err =>{
        //    if (err) 
        //        throw err

        //})
        fs.readFile('./db/db.json', (err, data)=>{
            if (err) throw err;
            let notesData = JSON.parse(data);
            notesData.push(req.body);
            console.log("POST data" + notesData);
        });
        
    });

    app.delete("/api/notes", function(req,res){
        notesData.push(req.body);
    });


}