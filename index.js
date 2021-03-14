const { Server } = require( './src' );

const server = new Server( {
    jwtKey: '!UnsecureChangeMe!',
    path: '/.well-known/mercure',
    redis: {
        url: process.env.REDIS_DSN || ''
    }
} );

server.listen( process.env.PORT || 3000 );