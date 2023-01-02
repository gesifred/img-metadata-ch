const express = require("express");
const cors = require('cors');
const app = express();
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer({ dest: 'uploads/' })

app.use(cors({ optionsSuccessStatus: 200 }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('public'));

app.get("/", function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
  });

app.post("/api/fileanalyse",upload.single('upfile'), function(req,res){
  console.log(req.file);
    res.json({
      name:req.file.originalname,
      type:req.file.mimetype,
      size:req.file.size
    });
})

module.exports = app;

