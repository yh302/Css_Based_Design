const express = require('express')
const app = express()
const port = 3000

// app.use(expressLayouts);
// app.set('view engine', 'pug');

// Express body parser
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))