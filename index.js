const express = require('express')
const app = express()
const port = 8585
const apiRoutes = require('./Routes/index.routes')
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola Mundo!')
});

apiRoutes(app)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})

