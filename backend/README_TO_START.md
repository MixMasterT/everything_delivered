#### 1) Setting Up mongoDB
Assuming you have homebrew run:
`
brew update
`
then
`
brew install mongodb
`
next from the command line in the backend directory:

`npm run-script startdb`

This is basically short hand for `mongod --dbpath /Users/chesnutt/Documents/everything_delivered/backend/data/db --httpinterface --rest`.

#### 2) Running the server

From the command line run: `npm run-script startserver`
