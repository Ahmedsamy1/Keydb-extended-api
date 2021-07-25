const express = require('express');

const servicesRoutes = require('./routes/ServicesRoutes');
const postsRoutes = require('./routes/PostsRoutes');


const app = express();

app.use(servicesRoutes);
app.use(postsRoutes);


app.listen(3000);