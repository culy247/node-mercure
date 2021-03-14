const { Server } = require( './src' );
const cors = require( 'cors' );

class App extends Server
{
    configure ()
    {
        this.app.use( cors() );
    }
}

const server = new App( {
    jwtKey: '!ChangeMe!',
    path: '/rocket',
    redis: {
        url: process.env.REDIS_DSN || ''
    }
} );

const port = parseInt( process.env.PORT || 3000 );
server.listen( port );
console.log( 'server listen on port: ' + port );