# Subreddits catalog

List of subbredits catalogs (infinite scroll) using AngularJs [Demo](https://whispers16.github.io/subreddits-catalog)

![reddit catalog|922x282,60%](https://whispers16.github.io/subreddits-catalog/images/logo.png  "Reddit Catalog")

  
## Description
The user should be able to go into a detail of the subreddit
showing its banner, header title, long description, submission text and any other information you are able to identify, as well as its 5 most active comments.

## How to run it

Install all the dependencies

  ```$ npm install```
To run the project use

  ```$ npm run dev```
To build the project for production use

  ```$ npm run build```

## Project structure
This project was built thinking on a modularize approach, so in case the project grows it may be mantainable.

 - **app folder:** Cointain all the logic for the app, divided on modules folder structure, an assets.
 - **modules folder:** Each new feature is organized as a new module, which contains: ***config folder*** (routing, and general config), ***controllers folder***, ***directives folder***,  ***helpers folder*** (Cointains filters, plugins, etc), ***services folder***, ***views folder*** (html files for the new module).
 - **dist folder:** Once `$ npm run build` is launched, a dist folder is created for production.

## Templete

It was required a theme from *openwebdesign.org* the theme chosen was [iceberrrg](http://www.openwebdesign.org/viewdesign.phtml?id=6382&referer=%2Fbrowse.php)