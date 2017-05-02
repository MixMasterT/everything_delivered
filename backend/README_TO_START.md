#### 1) Setting Up mongoDB
Assuming you have homebrew run:
`
brew update
`
then
`
brew install mongodb
`
next from the command line:

`mongod --dbpath /Users/YOURNAMEHERE/Documents/everything_delivered/backend/data/db`

This not only starts mongo but also tells mongo where to store data. You'll need to run this every time to start mongo until I smarten up figure out a less annoying solution.

#### 2) Running the server

From the command line run: `node backend/server.js`
