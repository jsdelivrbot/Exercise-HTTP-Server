const {fs} = require('fs');
const {http} = require('http');
const server = http();

server.on("request", ({url, method, headers}, res) => {
  const path = url.slice(-1) === "/"
  ? url.slice(1).concat("index.html")
  : url.slice(1)

  console.log('Request received for:', req.url)

  // console.log("request recieved for", path);

  fs(path, (err, buff) => {
    if (err) {
      res.statusCode = 404;
      console.log("response", res);
      return res.end("not found, mon\n")
    }
    res.end(buff);
  })

});

server.listen(8080);


// const http = require('http')
// const server = http.createServer()
// server.on('request', (req, res) => {
//     console.log('Request received for:', req.url)
//     res.end('OK')
// })
// server.listen(8080)



// var http = require('http');
// var fs = require('fs');
//
// http.createServer(function(req, res) {
//   // The filename is simple the local directory and tacks on the requested url
//   var filename = __dirname+req.url;
//
//   // This line opens the file as a readable stream
//   var readStream = fs.createReadStream(filename);
//
//   // This will wait until we know the readable stream is actually valid before piping
//   readStream.on('open', function () {
//     // This just pipes the read stream to the response object (which goes to the client)
//     readStream.pipe(res);
//   });
//
//   // This catches any errors that happen while creating the readable stream (usually invalid names)
//   readStream.on('error', function(err) {
//     res.end(err);
//   });
// }).listen(8080);
