import { IRequest } from "../interfaces/IServer";

const getReqData = ( req: IRequest ) => {

    return new Promise(( res, rej ) => {
        try {
            let body = '';

            req.on('data', ( chunk ) => {
                body += chunk;
            })

            req.on("end", () => {
                res( body );
            });

        } catch (error) {
            rej(error);
        }
    });
};

export default getReqData;