const fs = require("fs");

module.exports = function(app){


//Set up api page to return the data from the db.json.

    app.get("/api/notes", function(req,res){
        fs.readFile('./db/db.json', (err, data)=>{
            if (err) throw err;
            let notesData = JSON.parse(data);
            res.json(notesData);
        });
    });


//Set up the api query routes by the unique id /api/notes/id.

    app.get("/api/notes/:id", function(req,res){
        fs.readFile('./db/db.json', (err, data)=>{
            if (err) throw err;

//------------------------------------------------------------------------------
//Need to parse the data for manipulation
            let notes = JSON.parse(data);
            let noteSelection = req.params.id;
            for (let i = 0; i < notes.length; i++){

//Display only the element that corresponds to the route entered in the browser.

                if (noteSelection == notes[i].id){
                    res.json(notes[i])    
                }                 
            }
        });
    });    

//-------------------------------------------------------------------------------
//Set up api to POST data to the file on the server.

    app.post("/api/notes", function(req,res){
        fs.readFile('./db/db.json', (err, data)=>{
            if (err) throw err;

//Parse the string to perform operations including pushing new nte to the array.

            let postNotesData = JSON.parse(data);
            postNotesData.push(req.body);

//Add unique identifiers for the data in the file with a new key for each object.            
            for (let i=0;i<postNotesData.length;i++){
                postNotesData[i].id = i+1;
            };
//Stringify the data before writing back to the db file.

            let postNotesString = JSON.stringify(postNotesData);
            fs.writeFile("./db/db.json", postNotesString, err =>{
                if (err) throw err;
                console.log("Data POSTED");
            });
        });
    });

//-------------------------------------------------------------------------------
//Set up api to DELETE  data to the file on the server.

    app.delete("/api/notes/:id", function(req,res){
        fs.readFile('./db/db.json', (err, data)=>{
            if (err) throw err;
            let deleteSelection = req.params.id;
            let deleteNotesData = JSON.parse(data);
            deleteNotesData.forEach((element,i) => {
                if(element.id == deleteSelection){
                    deleteNotesData.splice(i,1)                    
                }
                
            });
//Stringify and write the array back to db.json file.
            let deleteNotesString = JSON.stringify(deleteNotesData);
            fs.writeFile("./db/db.json", deleteNotesString, err =>{
                if (err) throw err;
                console.log("Data DELETED");
            });

        });
    });
}