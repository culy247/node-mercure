const { Server } = require( './src' );

const server = new Server( {
    jwtKey: '!UnsecureChangeMe!',
    path: '/.well-known/mercure',
    redis: {
        host: process.env.REDIS_HOST || '',
        port: process.env.REDIS_PORT || 6793
    }
} );

server.listen( process.env.PORT || 3000 );