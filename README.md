# Automation Cypress

This project contains the [Cypress](https://www.cypress.io/) library for testing.\
Remember to have run the `npm install` command. \
If cypress doesn't install and unzip correctly run the following command `npm run cy:install`.\
Before executing the command `npm start` remember to have the client's server up and running.

## Configuration
set your server ip on `"baseUrl":` parameter inside `cypress.json` file

## Execute tests in debug
run `cypress open`

## Execute test using tags
`npx cypress-tags run -e TAGS='@about'`

## Run special environment variable commands

example:
`npm run start -- --env type=odfe --config baseUrl=https://localhost:5600`

### default setting:
type=`xpack`
baseUrl=`https://localhost:5601/`

