const { Server } = require( 'mercure' );

const server = new Server( {
    jwtKey: '!UnsecureChangeMe!',
    path: '/.well-known/mercure',

} );

server.listen( 3000 );