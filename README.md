# Ionic Eats Workshop

A basic app for learning Ionic 2. 

### Features

The app uses these features from Ionic 2:

- tabs
- list
- item
- card
- searchbar
- refresher
- grid
- horizontal scroll
- ionicons
- Ionic Native
- push/pop nav
- modal
- avatar
- slides
- utility attributes

## Getting Started

To run the app, clone or download it, then do the following in the project directory:

1. `npm install` to install dependencies
2. `ionic plugin add geolocation` to get the Cordova Geolocation plugin
3. `ionic serve` to run in the browser

If you want to run this on a device, you'll have to do the song and dance of either setting up USB debugging on your Android device, or code signing and etc. on your iOS device. Here's some instructions on how to do that in Xcode: http://bit.ly/deploy-without-dev-account

## What it Looks Like

This app has a two tab UI, one that shows nearby restaurants and one that allows you to search. All data is proxied through a little Express API I built that pulls from the [Foursquare API](https://developer.foursquare.com/). You can also tap on any of the results to see a detail view that includes a swipeable row of thumbnail images of the place.

![geolocation request](https://raw.githubusercontent.com/amuramoto/ionic-restaurants-v2/master/img/IMG_1860.PNG)  ![nearby list view](https://raw.githubusercontent.com/amuramoto/ionic-restaurants-v2/master/img/IMG_1861.PNG)  ![search list view](https://raw.githubusercontent.com/amuramoto/ionic-restaurants-v2/master/img/IMG_1863.PNG)

![slideshow view](https://github.com/amuramoto/ionic-restaurants-v2/blob/master/img/IMG_1866.PNG?raw=true)  ![place details view](https://raw.githubusercontent.com/amuramoto/ionic-restaurants-v2/master/img/IMG_1862.PNG)



## Please Be Kind to My API

Feel free to checkout this sample, but please remember it pulls it's data from a lightweight Express.js API that proxies the Foursquare API. I built the API for demo purposes, so I'm not sure what will happen if it gets too much traffic, so be kind to it. =)