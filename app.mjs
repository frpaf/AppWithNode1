import { createServer } from 'http';

const port = process.env.PORT || 3000;

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("Hello world !!");
}

const server = createServer(requestListener);
server.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});