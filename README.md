# webpack5-tutorial

installing from scratch? install or reinstall all dependencies 

rm -rf node_modules
npm install




# installing terser pluggin

- minimize our .js file for dist.
- you can use uglify-js too

npm install terser-webpack-plugin --save-dev


# extracting css into a separate bundle (part 1)

make 2 diferent compile files 1 for css another to js

run in the terminal:

npm install mini-css-extract-plugin --save-dev


# browser caching 

files will be created with md5 hash.

if you change tha file, the md5 hash will change too.

# clean dist folder before generating new bundles

this plugin will remove the other md5 files from dist. created after we changed any file

npm install clean-webpack-plugin --save-dev

# lets configure webpack to clean this folder as well

'cleaning dist folder before generating new bundles'   (keep the folder nice and)


# html-webpack-plugin

npm install html-webpack-plugin --save-dev

now webpack creates our html file in dist folder, with all the new and updated generated css and js , index.html from main project has been deleted. one it is created inside dist folder.

# Customizing Generated HTML Files

https://github.com/jantimon/html-webpack-plugin


# Integration with Handlebars

webpack created our html using our own template, in that case with handlebars. 

npm install handlebars-loader --save-dev
npm install handlebars --save

https://github.com/jantimon/html-webpack-plugin/blob/master/docs/template-option.md


# webpack plugins

https://webpack.js.org/plugins/


# Production vs Development Builds

# mode in webpack

https://webpack.js.org/configuration/mode/

we are testing development mode if catchs a error.

# Managing Webpack Config for Production and  Development Use Cases

we creating 2 diferent configurations prod and dev for webpack


# webpack dev server

npm install webpack-dev-server --save-dev


# Code Splitting in Webpack: Multiple JS and CSS Bundles .

# Generate Multiple HTML Files


# Extracting Common Dependencies While Code Splitting

npm install lodash --save

# Setting Custom Options for Code Splitting

using react

npm install react --save


# Setup Development Environment For Multiple Page Application