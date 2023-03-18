# Quote Bot for OG Creek Crew Discord

### Hey folks, this is the repo for the quote bot I am building for my discord server

So far, it is a slash command that is registered at /sneaky

Next, I would like to have it scan messages and give quotes based on the content of those messages.

Lastly, the final goal for this project will be to:

> A) Connect the bot to a DB

> B) Make a UI that lets people add stuff to the bot db

> C) Make it redeploy and run when changes are made to the DB

#### Commands:

- format: this formats all targeted files to match the prettierrc specifications
- format:check: this checks target files to see if they already match
- dev: runs the typescript compiler and then runs the entry file
- deploy: runs the typescript compiler and then runs the code to update the bot's commands
- start: installs dependencies, deploys the commands, and then runs the bot script
- test: tbd
