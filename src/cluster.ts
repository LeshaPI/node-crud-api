import cluster from 'node:cluster';
import { cpus } from 'os';
import Server from './server';

class Cluster  {


    startCluster( PORT ) {

        if( cluster.isPrimary ) {

            for( let i = 0; i < cpus().length; i++ ) {
                cluster.fork()
            }

            cluster.on('exit', () => {
                cluster.fork();
            });

        } else {

            const server = new Server()
            server.start( PORT );
        }
    }
}

export default Cluster;