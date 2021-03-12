const { Server } = require( 'mercure' );
const PORT = process.env.PORT || 5000;
const server = new Server( {
    jwtKey: '!UnsecureChangeMe!',
    path: '/.well-known/mercure',
} );

server.listen( PORT );