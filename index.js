const { Server } = require( 'mercure' );
const config = require( "platformsh-config" ).config();
const credentials = config.credentials( 'redis' );
console.log( config, credentials );
const server = new Server( {
    jwtKey: '!UnsecureChangeMe!',
    path: '/.well-known/mercure',
    redis: {
        port: credentials.port,
        host: credentials.host
    }
} );

server.listen( config.environmentVariables.PORT );