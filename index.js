const { Server } = require( 'mercure' );
const PORT = process.env.PORT || 5000;
const server = new Server( {
    jwtKey: '!UnsecureChangeMe!',
    path: '/.well-known/mercure',
} );
try
{
    server.listen( PORT );
    console.log( 'Server run with port: ' + PORT );
} catch ( e )
{
    console.log( 'Server can not run with port: ' + PORT );
}