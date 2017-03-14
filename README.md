# react-weather-app
Simple React Weather App

![alt weather-app-SC](https://s31.postimg.org/z0zbe0bln/screenshot.png)

## Hello there little kitten,

this is a _tiny_ **react.js** sample app using all kinds of neat things like **ESlint**, **Babel** and **webpack**, minus all other not so neat things we don't need here. 

The web is a scary place full of to-do-app tutorials and false advertisements after all.

#### "Super tidy boilerplate install now!"
#### "Bare minimum boilerplate over here - _check it out_"

As I was a bit fed up with all these to do kinda apps - lets be honest we kittens don't have much to do anyways - I made this weather app. 
And it's actually useful. Already. As it's showing _real_ data. So we know when to go outside and sunbathe, you know. 
_Amazing_.

### Some Notes Prior Install
Before you go all crazy `npm install` on this, note this: 
This app is currently _not_ production ready and dev environment only - means do not deploy to servers.

Why, you meow, why? 

For once we're using an API key inside of our code and as all our code runs in the browser, mean kittens could steal our API key and do bad things like fetching weather a million times per second (while pretending they is us), and then the internet breaks and our API key will probably get invalidated by OWM and then our app breaks and we won't be able to know if it's fine to go outside to BBQ. 
(Also, little kitten, I left my key in there, you can try use it, but you are advised to get your own key from [Open Weather Map](http://openweathermap.org/api). Okay, meow?)

Also we're still missing tests here! (But I'm gonna add 'em in laterz.)
Good kittens always `test` before they `eat`.

#### "I don't need tests! I don't write bugs! Tests are for losers! Actually I like bugs! Bugs taste great!"

Suit yourself. ₍ᵔ·͈༝·͈ᵔ₎

## Installation

To install do the usual `npm install` + `npm start` dance and go to 
`http://localhost:8080/`.

(I'm assuming the kitten has used npm (naked paws meow) before.)

## Pitfalls aka Obscure Things Nobody Tells You About or Aren't Obvious

### Webpack. 
Oh, Webpack. You bundler of joy.
I've read many things about Webpack. Mainly on Github in issues sections.
It seems that it takes more to master Webpack than just having absorbed the docs. Some kittens swear on randomly juggling around data in `webpack.config.js
`. Some even are successful with this approach. So don't worry if you don't get it right from the start. You not only have to understand how Webpack works, but also how its _loaders_ work. There are all kinds of loaders.
In this _tiny_ project we are already using 6 of them. And there are still more out there on **naked paws meow**.

Do we really need 6? 
Yes, if we want to have ES6, SASS and custom (icon) fonts and maybe also some pictures of Mr Snuffles at some point in our app. Yes. This is it. (the joy of web development)

### Don't forget to import your main stylesheet inside your index.js*.
_*or whatever entry point file.js_
So for webpack to actually turn your styles into one neat fur ball and cough it up, you have to import your main styles in your entry point file like so 
`import '../public/stylesheets/main.scss';`
Or wherever inside your app, I like to do it in there, because somehow it makes sense. 

Load all the things - components, styles, the cheeseburger from yesterday. 
Cough it up in one big furry ball of HTML, CSS and JS. And hand it to the browser = stick it to the DOM with lots of spit: 
`ReactDOM.render(<App />, document.getElementById('app'));`
_Good._

### Stick It To Your Walls
Don't forget to create an `index.html` file e.g. like so
```
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>Title Meow</title>
    <link href="/purrblic/main.css" rel="stylesheet" />
</head>
<body>
    <div id="app"></div>
    <script src="/purrblic/bundle.js"></script>
</body>
```
See this container there? `<div id="app"></div>` - this is where we're gonna stick our greasy furball to. Also make sure you put the container before the bundled furball or it's gonna end up anywhere but inside our web page.

#### "Meow, wait, I'm confused. I thought we stuck app to our container prior, not the bundled furball?" 

As soon as you `npm start` webpack will do it's thing and bundle all the code. In our tiny app we just have one page, one route, basically one component (Weather), so in `App.jsx` we basically hand over our entire Weather component (including children as e.g. `LocationInput`), then hand it over to `index.js`, where we tell it to stick it to the DOM. So after Webpack's done its thing and we go to `http://localhost:8080/` it's gonna load `bundle.js` . 
To actually make the browser execute our **react** code we have to attach it to the DOM, good we did that in `index.js` and the browser is now gonna call our fun funcs from inside `bundle.js` and render our fancy App header and Weather component stuffs. 
_Cool!_

### Linters & Styleguide
Make sure you set up your linters correctly inside your editor of choice and machine. What are linters? Read [Lint Like It's 2015](https://medium.com/@dan_abramov/lint-like-it-s-2015-6987d44c5b48#.k43w6cvvg)
You might find all these hints and errors annoying at first, but you will grow on them eventually. Especially when you're just starting out with ES6. ESLint will remind you to use ES6 conventions while you code away and the styleguide will make sure you stick to best practices when writing JavaScript, so you're code will be more readable for your co-kittens.
_Groovy._

### RTFM - Rub Tame Furries Meow
Before you start work on _anything_, always stick to the original documentations for guidance. No, Stackoverflow, no hipster blogs, no to do app tutorials - dry docs are your friends. While Stackoverflow and hipster blogs might provide you with some useful information _at some point_, they won't, when you're just starting out and you don't yet fully understand what other people's problem's are. They might sound similar to yours, but yeah don't copy+paw away without having at least some rudimentary understanding of the things you are dealing with. Okay? 
_Nice._




