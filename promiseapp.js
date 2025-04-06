
//Promise

//object from a operation
//mention the status of the operation 
//3 status
    //1.waiting
    //2.resolved-done 
    //3.rejected/error-in the operation

    const fs = require('fs').promises;

    const readFile = (filepath) =>{
        return fs.readFile('file.txt','utf8')  //return a promise
    }

    readFile('file.txt').then((data)=>{
        console.log(data);
    })
    .catch((err) =>{
        console.error(err);
    })

