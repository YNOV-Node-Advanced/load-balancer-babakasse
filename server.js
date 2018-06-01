const express = require("express");
const app = express();

const PORTS = (process.env.PORT).trim() || 3000;

app.get("/", function(req, res) {
    res.send("Hello World from " + PORTS);
});

app.listen(PORTS, () => console.log("Server listening on http://localhost:" + PORT));
