// 1 require express
const express = require('express');
const cors = require('cors');

// 2 Create instance
const app = express();

// multer upload files
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

// upload single file //
app.post('/api/upload', upload.single('file'), (req, res) => {
  const file = req.file;

  if (file) {
    res.json(file);
  } else {
    res.status(400).json({ error: 'File upload failed!' });
  }
});
//*//

// upload Multi files //
app.post('/api/multifiles', upload.array('files'), (req, res) => {
  const files = req.files;

  if (Array.isArray(files) && files.length > 0) {
    res.json(files);
  } else {
    res.status(400).json({ error: 'Files upload failed!' });
  }
});
//*//

// 5 require dotenv
require('dotenv').config();

// 6 require connectDB
const connectDB = require('./config/connectDB');
connectDB();

// 7 routing
// middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/user', require('./routes/user'));
app.use('/api/product', require('./routes/product'));

// 3 Create PORT
const PORT = process.env.PORT;

// 4 Create server
app.listen(PORT, (error) => {
  error
    ? console.error(`Failed to connect to the server ${error}!`)
    : console.log(`server is running PORT ${PORT} . . .`);
});
