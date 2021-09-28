# Concert Log

## A Personal Journal App for Tracking Concerts
This app helps you track the different concerts that you attend. Being a musician means that I go to a lot of different concerts, small and large, and want an inviting and easy way to keep track of them.

## Features
* Main view: displays the currently selected journal entry. Defaults to the most recent.
  * Main journal entry: displays the title, date, and any other notes taken.
  * Upload/display photos: allows the user to upload photos, and have them displayed.
  * Map: uses Google Maps to display the location of your concert.
* Sidebar view: displays a list of previous entries. If an entry is clicked, it changes the main view.

## Preview
![Concert Log](https://github.com/juliebarwick/concert-log/blob/main/gif/concert-log.gif?raw=true)

## Tech Stack
* **Client:** React, styled-components, Google Maps API
* **Server:** Node, Express, Google Maps API
* **Database:** MongoDB

## Run Locally
```bash
  git clone https://github.com/juliebarwick/concert-log.git
```

Go to the project directory

```bash
  cd concert-log
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

Make sure mongoDB is running locally

Start webpack

```bash
  npm run build
```
The app is ready at http://localhost:3000/

## Requirements
* Web browser
* npm
* MongoDB
* Linux, macOS, or Windows

## Future features
* Markdown parser, so you can write in markdown and have your entries formatted
* Search for a specific entry
* Design improvements