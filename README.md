# webpack5-tutorial




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

'cleaning dist folder before generating new bundles'   (keep the folder nice and clean)