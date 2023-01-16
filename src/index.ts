import { PORT } from "./utils/consts";
import Server from "./server";

const server = new Server();

server.start( PORT );