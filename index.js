const express = require( 'express' );
const { Server } = require( './src' );
const cors = require( 'cors' );

class App extends Server
{
    configure ()
    {
        this.app.use( cors() );
        this.app.use( express.static( 'public' ) );
    }
}

const server = new App( {
    jwtKey: process.env.JWT_KEY || '!ChangeMe!',
    pubJwtKey: process.env.JWT_KEY || '!ChangeMe!',
    subJwtKey: process.env.JWT_KEY || '!ChangeMe!',
    path: process.env.HUB || '/hub',
    allowAnonymous: false, // Don't force subscriber authorization.
    maxTopics: 0,
    ignorePublisherId: true,
    publishAllowedOrigins: null,
    redis: {
        url: process.env.REDIS_DSN || ''
    }
} );

const port = parseInt( process.env.PORT || 3000 );
server.listen( port );
console.log( 'server listen on port: ' + port );