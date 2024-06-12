const express = require('express');
const path = require('path');
const app = express();
const hitCounterRoutes = require('./route/Croute');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'htmlfiles')));
app.use('/', hitCounterRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
