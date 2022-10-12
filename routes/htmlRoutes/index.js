const path = require('path');
const router = require('express').Router();

//Router to server notes.html
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/notes.html"));
});


//serves the index
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});


//Wildcard for other endpoints
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/notes.html"));
});




module.exports = router;