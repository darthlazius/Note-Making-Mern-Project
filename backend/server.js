const express = require('express');
const connectDB = require('./config/db');
const cors = require ('cors');
const notes = require('./routes/api/notes');

const app = express();
connectDB();
app.use(cors({origin: true, credentials: true}));
app.use(express.json({extended:false}));
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/notes',notes);
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server Running at ${port}`)
});