const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => {
  console.log(request);
  response.send("Hello from Express");
});

app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("server is listening");
});
