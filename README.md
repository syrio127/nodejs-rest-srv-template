# Getting Started

Welcome to this REST server template.

It contains these folders and files, following our recommended project layout:

File or Folder | Purpose
---------|----------
`package.json` | project metadata and configuration
`readme.md` | this getting started guide


## Next Steps

- Open a new terminal and run `node app.js` 
- If need to run in development mode use `nodemon app.js`

## Template Structure
The main point is the **app.js** file, but this file only creates a server based on models/server.js specification.
In server.js file the routes for each entity are defined as part of constructor variable, that point to an specific **routes** file.
The ``<entity>.routes.js`` file only create the endpoint and send the logic for specific controller founded under **/controllers** folder in root directory.

## Basic setup
The server only shows a very basic implementation for a unique entity called users, there are examples of CRUD endpoints and controllers to capture the answers of the api.
