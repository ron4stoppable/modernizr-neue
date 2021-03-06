# The new modernizr.com

This is now live at [modernizr.com](https://modernizr.com/)

### setup

```
npm install
bower install
```

### development

```
npm run develop
```

this will start a [hapi](http://hapijs.com/) server on port 3000 that will recompile assets on change via [nodemon](http://nodemon.io/)

### deployment

```
npm run deploy
```


this will generate a compiled and compressed static version of the website in the `/dist` directory

### production

Since `npm run deploy` generates a static site, any webserver will work. Just point it at the new `/dist` folder as a root.
However, if you use the included Hapi server to serve the assets you get extras, including

- including improved file compression via [zopfli](https://github.com/google/zopfli)
- a [bower](http://bower.io) download service
- support for [script-less clients](http://lynx.browser.org/) on `/download`

to get all that run

```
NODE_ENV=production node ./server
```

from the root of this project

you can also set `NODE_PORT` to override the default port of `3000`
