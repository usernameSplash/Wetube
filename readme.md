# Wetube

the clone project of youtube

## 1. Project Setting (02/10)

-   install node.js
-   install express.js
-   set package.json file
-   set .gitignore
-   set babel option
-   make "Hello World" program
-   apply nodemon
-   test middleware

## 2. Add middleware, router (02/11)

-   install morgan, helmet, bodyparser, cookieparser
-   make module("app.js")
-   add router, urls
-   make functions in controller module
-   install pug

## 3. View Parts with Pug (02/12)

-   add pug files for rendering pages
-   add layouts
-   add partials (footer, header)
-   add local variables into templates(pug files) by middleware and controller

## 4. Add login, Join Button (02/13)

-   add login, join pages
-   add new partial file (socialLogin.pug)

## 5. Add Many Actions into Pages (02/14, 02/15)

-   Many Pages
    -   Edit Profile
    -   Edit Video
    -   Video Upload
    -   Change Password

## 6. Add Many Actions into Pages-2 (02/16)

-   Log in and user profile controller
-   Change the constitutions of the header by user authentication
-   Access to user detail page

## Rest (02/18)

I moved my development environment to macOS.

## 7. Install MongoDB (02/20)

how to install MongoDB in your macOS

```
brew install mongodb-community
brew service start mongodb-community
mongod
mongo
```

how to connect to MongoDB

```
npm install mongoose
```

for privacy

```
npm install dotenv
```

-   Add Models : Videos, Comments on MongoDB

## 8. Interaction with DB 1 : Add, Edit Video(02/21~23)

-   Add video
-   Edit video
    -   Handle getEdit, postEdit
-   View video details page

## 9. Interaction with DB 2 : Delete, Searching Video(02/25)

-   Install, Set ESLint
-   DeleteVideo

## 10. WebPack (02/25)

-   Webpack
    -   Webpack is module bundler, js, sass in the webpack
    -   Set css loader
        -   find scss file
        -   extract text
        -   convert to css file
        -   see "webpack.config.js" file to check this stuff

## 11. User Authentication (02/27)

-   Passport : the middleware for helping control 'cookie'
    -   `npm install passport-local-mongoose`
-   Create User Model
-   Joining, Logging in
-   send cookie with session (express-session)

## 12. Github Authentication (02/29)

-   Use the passport strategy for github
-   There is a good manual for github authentication

    if there is a request of github auth, user is sended to github page. agreeing to share info with my page, the authentication is processed by callback func.

## Recap (03/01)

### User Authentication

#### Local Strategy

1. Username and password are sent by post request.
2. Moongoose automatically checks the user's infomation.
3. If it's correct, moongoose notices the sign to passport.
4. And then, passport create a new cookie data.

#### Github Strategy

1. User go to github page.
2. User authorize everything in there.
3. And then, github page give to us the infomation by "/auth/githubcallback"
4. Callback function will be called.
    - It must return callback function(parameter cb), with some sign(error, user).
5. If user is valid, cookie data will be created.

## ~~13. Facebook Authentication (03/02)~~

~~It is not much difference from Github strategy. But Facebook authentication is a little bit complex.~~

~~or get the authorization of Facebook, we must use **https**.~~

### ~~Install ngrok~~

~~ngrok is provide https tunnel to our server.~~

## 14. Kakao Authentication (03/04)

I gave up everything about Facebook Authentication, because it's so annoying.

The strategy of kakao is simple, and good.

Almost same with github.

## 15. Relationships and Route Protection(03/05, 03/07)

1. User Detail
    - one's profile should be changed by only himself(herself)
    - show the buttons "edit profile", "change password" to only account owner.

## 16. Relationships and Route Protection(03/08)

2. Video Detail
    - Also, video should be modified by only uploader.
    - Each video has its uploader.

Adding creator's infomation into video.

## 17. Protecting Video Routes

A video can be edited and delted by only its creator.

Improvement User Detail
