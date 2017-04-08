let express = require('express');
let path = require('path');
let port = 3000;
let app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(`Express dev server running on localhost:${port}`);
});
