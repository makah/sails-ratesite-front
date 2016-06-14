# sails-ratesite-front
Examples of the RateSite App with Sails.JS using Angular.JS as a separate front project

##Fase 1##
 Criei a aplicação Angular
    1. Usei o [slush-angular](https://github.com/slushjs/slush-angular) por utilizar o Google Angular best practices.




## Development

To start developing in the project run:

```bash
gulp serve
```

## Tests

To run tests run:

```bash
gulp test
```

## Production ready build - a.k.a. dist

To make the app ready for deploy to production run:

```bash
gulp dist
```

Now there's a `./dist` folder with all scripts and stylesheets concatenated and minified, also third party libraries installed with bower will be concatenated and minified into `vendors.min.js` and `vendors.min.css` respectively.
