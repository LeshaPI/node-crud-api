import { IResponce } from "../interfaces/IServer";
import UserDB from "../db/user-db";
import { v4 as uuidv4 } from 'uuid';
import { ID_REGEXP, OBJ_KEYS } from "../utils/consts";
import propCheck from "../utils/propCheck";


const db = new UserDB();

class UserController {
    async getUsers( res:IResponce ) {
        const users = db.getAll();

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(users));

    };

    async getUser( id, res:IResponce ) {

        if( id.match( ID_REGEXP ) ) {
            const user = db.getUser( id );

            if( user ) {
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify( user ));
            } else {
                res.writeHead(404, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ message: "ID does not exist" }));
            }
            
        } else {
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "ID is invalid" }));
        }

        
    };

    async createUser ( user, res:IResponce ) {

        user = JSON.parse(user);
        if( propCheck( user, OBJ_KEYS ) ) {
            user['id'] = uuidv4();
            const newUser = db.createUser( user )
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end( JSON.stringify(newUser) );
        } else {

            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Invalid prop" }));
        }
        
    };


    async updateUser( user, id, res ) {

        user = JSON.parse(user);

        if( id.match( ID_REGEXP ) ){

            const newUser = db.updateUser( user, id );
            if( newUser ) {
              res.writeHead(200, { "Content-Type": "application/json" });
              res.end( JSON.stringify( newUser ));
            } else {

                res.writeHead(404, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ message: "ID does not exist" }));
            }
            
        } else {
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "ID is invalid" }));
        }
        
    }

    async deleteUser( id, res ) {

        if ( id.match( ID_REGEXP ) ) {

            const users = db.deliteUser( id );
            if( users ) {

              res.writeHead(204, { "Content-Type": "application/json" });
              res.end();  
            } else {

                res.writeHead(404, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ message: "ID does not exist" }));
            }
            
        } else {
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "ID is invalid" }));
        }
        
    }
}

export default UserController;