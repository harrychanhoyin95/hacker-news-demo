# Hacker News Demo

A demo Hacker News Demo is a website that crawls Hacker News data.

## Guide
- [Bootstrapping](#bootstrapping)
- [Installation](#installation)
- [Tech Stack](#tech-stack)
- [Data Structure](#data-structure)
- [Future Development](#future-development)

### Bootstrapping
The project is bootstrapped with [Create Next App](https://github.com/vercel/create-next-app).

### Installation
```
$ git clone https://github.com/harrychanhoyin95/hacker-news-demo.git
$ cd hacker-news-demo
```

#### Server
```
$ cd api
$ yarn
$ yarn start
```

#### Client
```
$ cd client
$ yarn
$ yarn dev
```

### Tech Stack
- NextJS
- GraphQL
- NodeJS
- Typescript

### Data Structure
As I have to pass all the news data from backend to frontend, passing an `array` to frontend is my choice so that frontend can map and display the data in a faster way.

For each single piece of news, the structure and explanation is a below:

```
title: String
link: String
score: Int
author: String
age: String
numberOfComments: Int
```

For `score`, noticed that the format of the comments is `number + points`, I will find the points in hacker news and parse it as the same format in the website.

For `age`, it is the time between the publishing time and the current time. It may have several time unit(minutes, hours, and days). That's why I choose it a string.

For `numberOfComments`, noticed that the format of the comments is `number + comments`, I will find the number of comments at first. If there is no comments, I will parse the data as 0.

### Future Development
1. Crawl other news websites and add the data to the server side.
2. Make a data normalizer module to parse all the incoming crawled data.
3. Make a news summary website in the client side.
4. Authentication system.