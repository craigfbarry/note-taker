//const notesData = require("../db/db");
const fs = require("fs");
let uniqueID = 1;

module.exports = function(app){



    app.get("/api/notes", function(req,res){
        fs.readFile('./db/db.json', (err, data)=>{
            if (err) throw err;
            let notesData = JSON.parse(data);
            res.json(notesData);
        });
    });


    app.post("/api/notes", function(req,res,uniqueID){


        fs.readFile('./db/db.json', (err, data)=>{
            if (err) throw err;
            let postNotesData = JSON.parse(data);
            console.log(postNotesData);
            postNotesData.push(req.body);
            console.log(postNotesData);
        });
        //console.log(postNotesData);
        //postNotesData.push(req.body);
        //console.log(postNotesData);
        //fs.writeFile("./db/db.json", postNotesData, err =>{
        //    if (err) 
        //        throw err
        //})
        uniqueID++;
    });

    app.delete("/api/notes", function(req,res){
        notesData.push(req.body);
    });


}