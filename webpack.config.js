 //retrieve absolute path
 const path = require('path');
 
 //export configuration object we write, so that webpack can work with it
 module.exports = {
     //entry file(files ), the one starts bundling
     entry: './src/js/index.js',
     //where to save bundle file
     output:{
         //needs,absolute path, dirname is the path we retrieve, followed ny the location we want to bundle in
         path: path.resolve(__dirname, 'dist/js'),
         filename: 'bundle.js'//standard name for webpack output 
     },
     mode: 'development'


 };