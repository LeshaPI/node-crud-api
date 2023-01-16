import { PORT } from "./utils/consts";
import { server } from "./server";
import Cluster from "./cluster";

const cluster = new Cluster();

process.env.MULTI ? cluster.startCluster( PORT ) : server.start( PORT );