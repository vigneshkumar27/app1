const os =  require('os');

const fs = require('fs');

const path = require('path');

const http = require('http');


// const tables = require('./serve');

// const servec = require('./serve');


// const os = require('os');

// const currentOs = {
//     name:os.userInfo(),
//     uptime:os.uptime(),
//     release:os.release(),
//     totalmemory:os.totalmem(),
//     availablemem:os.freemem()
// }

// console.log(currentOs);

// const paths = path.join("C","ONE","SUB1",'fnjve.txt');
// console.log(__dirname);

// fs.writeFile("./1.txt","first files of the system",(err,result)=>{
//     if(!err){
//         console.log(result);
//     }
//     else{
//         console.log("Error writing the file");
//     }
// })

// fs.readFile("./1.txt","utf-8",(err,result)=>{
//     if(!err){
//        console.group(result);
//     }
//     else{
//         console.log(err.errno);
//     }
// })

// fs.writeFile("./2.txt","second text",{flag:'a'},(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('File creation successfull');
//     }
// })

// const server = http.createServer((req,res)=>{
//     if(req.url === "/"){
//         res.end("home");
//     }
//     if(req.url === "/about"){
//         res.end("about");
//     }
//     if(req.url == "/files"){
//       res.end("files");
//     }
// })

// server.listen(5002,(err)=>{
//     if(!err){
//         console.log("Server running");
//     }
// });

//Asynchronous
// console.log("First");
// for(let i=0;i<5;i++){
//     console.log(i);
// }
// console.log("six");


//-------------------------------

// Asynchronous

// console.log("begin");
// setTimeout(()=>{
//     for(let i=0;i<7;i++){
//         console.log(i);
//     }
// })
// console.log("Lasting");






