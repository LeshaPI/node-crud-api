import { IncomingMessage, ServerResponse } from 'node:http';


export interface IRequest extends IncomingMessage {
    body?: any;
	pathname?: string;
	params?: any;
	query?: any;
}

export interface IResponce extends ServerResponse {
    send?: (statusCode: number, data: any) => void;
}

export interface IUserDb{
    id?: string;
	username: string;
	age: number;
	hobbies: string[];
}