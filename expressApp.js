import express from 'express';
import path from 'path';

const port = 3000;
const app = express();

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
