## Frontend Readme

### How to Run
To run this frontend, you need two terminal windows running two separate
processes. Both need to be in this outer frontend directory. In one, run
'yarn start' or 'npm start' to start a dev server. In the other, run
'webpack --watch' or 'webpack -w' to update the bundle file whenever you
make a change. You will currently still need to refresh the browswer to
see your changes.

### Redux Generator
This frontend directory structure was built with David Hu's [react-redux-generator]("https://github.com/davidhu2000/react_redux_generator").
Please don't modify the structure so that generator can still be used. This
is an example of a time where convention over configuration will benefit us,
even though this is not a rails project!

### Webpack
This webpack includes SASS loaders, so we can use SCSS instead of just
plain old CSS. The file-loader and url-loader are also included, which
should make it possible to encode smaller images as base-64 encoded data
urls. I have not had much success getting this feature to work yet, but it
is exciting!

### Temporary Changes from Pak Branch
