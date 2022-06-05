const express = require('express');
const mongoose = require('mongoose');

const app = express();
<<<<<<< HEAD
const PORT = process.env.PORT || 3001;
=======
<<<<<<< HEAD
const PORT = process.env.PORT || 3010;
=======
const PORT = process.env.PORT || 3007;
>>>>>>> 9d5851d2c96335472f2d716f82d76a1fb5d4368c
>>>>>>> ed8e5f863299cb2d2cdfaa44c9d4b4fbd8c9ec86

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/noSQL', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


mongoose.set('debug', true);

app.listen(PORT, () => console.log(`Connected on localhost: ${PORT}`));