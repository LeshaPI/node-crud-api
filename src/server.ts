import http  from 'node:http';
import userRouter from './router/user.router';
import { IResponce, IRequest } from './interfaces/IServer';

class Server {

    public server;

    constructor() {
        this.server = this.createServer();
    }

    private createServer() {
        return http.createServer(( req: IRequest, res: IResponce ) => {
            userRouter( req, res );
        });
    }
    
    listen( PORT ) {
        this.server.listen( PORT );
    }   


    start( PORT ) {
        this.listen( PORT );
        console.log( 'sever started' );
    }
}

export default Server;