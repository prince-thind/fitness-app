# fitness-app

Basic react frontend with an API built in express backend.

# Live Link

# [Here](https://fitness-app-demo.onrender.com/)

(Please be patient, sometimes it takes a while for this site to load)

# How to run Locally

```
1. npm i; npm start;
2. cd client; npm i; npm run dev;
```

Note: you'll also need a .env file, a reference file has been provided as [.env.example](./.env.example) in the repo.

# API specs

Api specs can be found at the top level of this repo as api-specs.xlsx or [Here](./api-specs.xlsx);

API return all the data in this format:

```js
{
  data: {
    //stuff here
  }
}
```

and for errors:

```js
{
  error: {
    code: "code";
    message: "message";
  }
}
```

This was particulary useful while integrating it with my react app. Notably in my [customFetch Function](./client//src//lib//apiFetch.js)

# Project speific information

1. The structure of this project mimics standard MVC pattern except for the view part obviously.

2. The frontend is served from the express server itself, specifically, it is first built and then the dist folder is served by express on "/" endpoint.

3. I used mongoose library because it's usually the go to library for mongoDB stuff and is very convinient.

# Some Remarks

1. The server uses commonJS module system and not es6, mostly because nodeJS has default suppport for it. I do believe es6 is better for most cases, but since the project was small enough I decided to stick with the defaults. Also read point 2 for another reason.

2. I used the standard express-generator package for generating express boilerplate:
   ` npx express-generator --no-view .`
   The boilerplate that comes with does not use es6 and I decided to stick with it instead of manually changing the require statements.

3. I have tried my best to make the API as restful as possible and used postman for most of my testing.

4. I could put a lot of effort into frontend and designing but I believe it was not in the spirit of this assignment hence I decided to keep it simple.
