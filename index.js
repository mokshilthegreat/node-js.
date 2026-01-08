const express = require("express");
const app = express();
const { convert } = require("html-to-text");

const options = {
  wordwrap: 130,
};

app.get("/test", (req, res) => {
  const html = "<div>Hello World</div>";
  const text = convert(html, options);
  console.log(text);
});

app.listen(3000, () => {
  console.log("Server running");
});