import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/index.html")});

app.get("/secret", (req,res) => {
    res.sendFile(__dirname + "/secret.html")});   
    
app.post("/check", (req, res) => {
  const password = req.body.password;

  if (password === "novidades") {   
    res.redirect("/secret");
  } else {
    res.sendFile(__dirname + "/index.html");
  }
}); 

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
