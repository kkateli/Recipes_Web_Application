 //This is the configuration file for webpack 
 //retrieve absolute path
 const path = require('path');
 //retrieve html webpack plugin
 const HtmlWebpackPlugin = require('html-webpack-plugin');
  
 
 //export configuration object we write, so that webpack can work with it
 module.exports = {
     //entry file(files ), the one starts bundling
     entry: ['babel-polyfill','./src/js/index.js'],
     //where to save bundle file
     output:{
         //needs,absolute path, dirname is the path we retrieve, followed ny the location we want to bundle in
         path: path.resolve(__dirname, 'dist'),
         filename: 'js/bundle.js'//standard name for webpack output 
     },
     devServer:{
         contentBase:'./dist'
     },
     //receive an array containing all the plugins we are using
     //here we wan to grab/bundel index.html in the scr folder to dist
     plugins:[
         new HtmlWebpackPlugin({
             fielname: 'index.html',
             template: './src/index.html'//starting file


         })

        ],
        module:{
            rules:[
                {
                    test: /\.js$/,//regular exression, to test all the javascript here. this will test all the files whether they end as .js
                    exclude: /node_modules/, //exclude the folder node_modules
                    use:{
                        loader: "babel-loader"//if found a js file, will use babel loader
                    }

                }
            ]
        }
    

 };