const { Server } = require( 'mercure' );
const config = require( "platformsh-config" ).config();
const credentials = config.credentials( 'rediscache' );

const server = new Server( {
    jwtKey: '!UnsecureChangeMe!',
    path: '/.well-known/mercure',
    redis: {
        port: credentials.port,
        host: credentials.host
    }
} );

server.listen( config.port );