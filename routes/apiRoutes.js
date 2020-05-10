//const notesData = require("../db/db");
const fs = require("fs");
//let uniqueID = 1;

module.exports = function(app){



    app.get("/api/notes", function(req,res){
        fs.readFile('./db/db.json', (err, data)=>{
            if (err) throw err;

            let notesData = JSON.parse(data);
            res.json(notesData);
        });
    });


    app.post("/api/notes", function(req,res){
        //let uniqueID = 1;


        fs.readFile('./db/db.json', (err, data)=>{
            if (err) throw err;

            let postNotesData = JSON.parse(data);
            postNotesData.push(req.body);
            console.log(postNotesData);
            //postNotesData.forEach(idFunction);

            for (let i=0;i<postNotesData.length;i++){
                postNotesData[i].uniqueID = i+1;
            };
            console.log(postNotesData);

            let postNotesString = JSON.stringify(postNotesData);
            fs.writeFile("./db/db.json", postNotesString, err =>{
                if (err) throw err;
                console.log("Data POSTED");
            });
        });
    });



    app.delete("/api/notes", function(req,res){
        notesData.push(req.body);
    });


}