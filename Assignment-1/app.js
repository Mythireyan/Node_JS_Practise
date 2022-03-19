const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.setHeader("content-type", "text/html");
    res.write("<html></head><title>Assignment-1</title></head>");
    res.write("<body><h1>This is Assignment 1</h1></body>");
    res.write(
      "<form action=create-user method=POST><input type=text name='users'/><button type=submit>Submit</button></form>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/users") {
    res.setHeader("content-type", "text/html");
    res.write("<html></head><title>Assignment-1</title></head>");
    res.write(
      "<body><ul><li>User-1</li><li>User-2</li><li>User-3</li></ul></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/create-user") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    return req.on("end", () => {
      const parsedData = Buffer.concat(body).toString();
      const userName = parsedData.split("=")[1];
      console.log(userName);

      res.setHeader("content-type", "text/html");
      res.write("<html></head><title>Assignment-1</title></head>");
      res.write(`<body><ul><li>${userName}</li></ul></body>`);
      res.write("</html>");
      return res.end();
    });
  }
});

server.listen(3000, () => {
  console.log("Server started at port 3000");
});
