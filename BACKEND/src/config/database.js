//Arquivo de configuracao das credencias do atlas 

const mongoose = require('mongoose');

const url = 'mongodb+srv://11504346:11504346@nemo.qdrrdgc.mongodb.net/test';

mongoose.connect(url, {useNewUrlParser: true});

module.exports = mongoose;