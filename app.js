/* REQUIRES */

const express= require('express');
const path = require('path');

/* SETTING */
const app = express();
const PORT = 3030;


/* RUTES */
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'home.html')));
app.get('/contac', (req, res) => res.sendFile(path.join(__dirname, 'views', 'contac.html')));


/* SERVER */
app.listen(PORT, () => console.log(`Server Running in http://localhost:${PORT}`));