const express = require('express');
const cors = require('cors');

class Server {

    //*Server constructor
    constructor(){
        this.app = express()
        this.port = process.env.PORT;
    
        //* Routes Paths
        this.usersPath = '/api/users';

        //* Middlewares
        this.middlewares();

        //* Server Routes
        this.routes();
    }

        //* Middlewares Definition
        middlewares(){

        //* CORS
        this.app.use( cors());

        //! Important
        //** Req body, read and parsing, this can be done with any formats like XML, in this case, just JSON */
        this.app.use( express.json());


        //* Public folder -- This overwrite te '/' route if any.
        this.app.use( express.static('public')) 
    }


    //* Routes definition
    routes(){
        
        this.app.use(this.usersPath, require('../routes/user.routes'))
    }

    //*Listen (start) function
    listen(){
        this.app.listen( this.port, () => {
            console.log('Server running in port', this.port);
        })
    }
}

module.exports = Server;