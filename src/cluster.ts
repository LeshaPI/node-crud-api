import cluster from 'node:cluster';
import { cpus } from 'os';
import { server } from './server';

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
            server.start( PORT );
        }
    }
}

export default Cluster;