import { ENDPOINT } from "../utils/consts";
import { IResponce, IRequest } from "../interfaces/IServer";
import UserController from "../controller/user.controller";
import getReqData from "../utils/getReqData";


const controller = new UserController();

const userRouter = async( req:IRequest, res:IResponce ) => {

    const isUrlIncludesId = req.url.includes( ENDPOINT ) || req.url.split( '/' )[3];

    if ( req.url === ENDPOINT && req.method === 'GET' ) {

        controller.getUsers( res );
    } else if ( req.url === ENDPOINT && req.method === 'POST' ) {

        const data = await getReqData( req );
        controller.createUser( data, res );
    } else if ( isUrlIncludesId && req.method === "GET" ) {

        const id = req.url.split( '/' )[3];
        controller.getUser( id, res );
    } else if ( isUrlIncludesId && req.method === "DELETE" ) {

        const id = req.url.split( '/' )[3];
        controller.deleteUser(id, res);
    } else if ( isUrlIncludesId && req.method === "PUT" ) {

        const data = await getReqData( req );
        const id = req.url.split( '/' )[3];

        controller.updateUser(data, id, res);
    } else {

        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Route not found" }));
    }
}

export default userRouter;