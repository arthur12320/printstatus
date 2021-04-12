var xmlrpc = require('xmlrpc')
var express = require('express');

const app = express();




app.use('/',(req,res)=>{
    // Creates an XML-RPC client. Passes the host information on where to
    // make the XML-RPC calls.
    var client = xmlrpc.createClient({ host: 'localhost', port: 7978})
   
    // Sends a method call to the XML-RPC server
    client.methodCall('status',[], function (error, value) {
      // Results of the method response
      res.send(value);

    })
})


// setTimeout(function () {
//     // Creates an XML-RPC client. Passes the host information on where to
//     // make the XML-RPC calls.
//     var client = xmlrpc.createClient({ host: 'localhost', port: 7978})
   
//     // Sends a method call to the XML-RPC server
//     client.methodCall('status',[], function (error, value) {
//       // Results of the method response
//       console.log(value)

//     })
   
//   }, 1000)


app.listen(8080, ()=>{console.log('listening on 8080')})