const express = require("express");

const PORT = process.env.PORT || 3050;

const app = express();

app.get("/lucene/:id", (req, res) => {
  request = req.params.id
  //res.json({ message: "Hello from server!" });
  const {exec} = require('child_process');
  exec("java -cp ~/twitter-usa-map/Lucene/searchLucene.jar edu.ucr.cs.IR.searchLucene ~/twitter-usa-map/Lucene/INDEX "+ request + " CA", (error, stdout, stderr) => {
  if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.log();
    res.json({ message: stdout });
  });
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
