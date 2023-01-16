import { PORT } from "./utils/consts";
import Server from "./server";
import Cluster from "./cluster";

const server = new Server();
const cluster = new Cluster();

process.env.MULTI ? cluster.startCluster( PORT ) : server.start( PORT );