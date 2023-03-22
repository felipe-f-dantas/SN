//Arquivo de configuracao das credencias do atlas 

const mongoose = require('mongoose');

const url = process.env.KEY;

mongoose.connect(url, {useNewUrlParser: true});

module.exports = mongoose;

