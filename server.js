const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

//routes
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");


//Middleware
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(3001, () => {
    console.log(`API server now on port ${PORT}!`);
  });