import { IUserDb } from "../interfaces/IServer";

class UserDB {

    constructor ( private users: IUserDb[] = [] ) {};

    public getAll (): IUserDb[] {
        return this.users;
    };

    public getUser ( id:string ): IUserDb {
        return this.users.find( (user: IUserDb) => user.id === id );
    };

    public createUser ( user: IUserDb ) {
        this.users.push(user);
		return user;
    };

    public updateUser ( newData: IUserDb, id ): IUserDb | null {

        let isExist = false;

        this.users.forEach(( user: IUserDb ) => {
			if ( user.id === id ) {
				Object.keys( user ).forEach(( key ) => {
					user[key] = newData[key];
				});
                user['id'] = id;
                isExist = true;
			} 
		});

		return isExist? newData: null;
    };

    public deliteUser ( id: string ): IUserDb[] | null {

        let isExist = false;

        this.users.forEach((user: IUserDb, index) => {
			if (user.id === id) {
				this.users.splice(index, 1);
                isExist = true;
			}
		});

		return isExist?this.users: null;
    };
}


export default UserDB;