const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;


app.use('/tiles', express.static(path.join(__dirname, 'public/tiles'), {
    maxAge: 0,
    setHeaders: (res, path, stat) => {
        res.set('Cache-Control', 'no-store');
    }
}));

app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
