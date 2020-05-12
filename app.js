const express = require('express');
const app = express();


const port = process.env.PORT || 5500;

app.use(express.static('views'));


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})