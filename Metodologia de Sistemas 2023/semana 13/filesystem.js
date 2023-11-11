import { readFile, writeFile, unlink } from 'fs';

function leer(route, cb){
    readFile(route, (err, data) => {
        console.log(data.toString());
    })
}

function create(route, content) {
    writeFile(route, content, function(err){
        if(err){
            console.log("Couldn't create .txt", err);
         } else {
            console.log('Created .txt succesfully!');
        }
    })
}
function erase(route,cb){
    unlink(route, cb);
}

erase(`${__dirname}/archivo1.txt`, console.log);

        