# Express build

First, install [node.js](https://nodejs.org/en/)

Once installed, test that Node has been installed by opening up your command line interface and inputting

```
$ node -v
```

This should return/print the most current node version to your OS.

# Running the app

Fork this repository

Clone repository and save to a destination of your choice

In your command line interface and run:

```
$ npm install
```

Once everything is installed, start the server by running:

```
$ npm start
```
You should see a success message in your CLI, that the server is running on port 3000.

In your browser, input url [localhost:3000] (http://localhost:3000)

# For dev

In the views directory are the .ejs files that you will be developing in.

## For UI:

Build the interface in ```views/index.ejs```, just use regular HTML.

Don't worry about the ```<head>``` or ```<body>``` tags, just write the HTML as you would in codepen.io.

## For Cards:

Build the card template in ```views/card-template.ejs```, just use regular HTML.

Don't worry about the ```<head>``` or ```<body>``` tags, just write the HTML as you would in codepen.io.

## For UI and Cards:

There are stylesheets for each .ejs file inside the ```public``` directory, please stick to your styles to avoid merge conflicts.

Remember to keep naming conventions of id's and classes semantic and appropriate. Until we establish a set guideline/naming convention, keep it simple and readable.

# HAVE FUN!
