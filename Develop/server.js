const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

//routes
const htmlRoutes = require("./routes/HTMLRoutes");
const apiRoutes = require("./routes/APIRoutes");



app.listen(3001, () => {
    console.log(`API server now on port ${PORT}!`);
  });