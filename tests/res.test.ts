import { constants as httpConstants } from 'http2';
import { ENDPOINT, PORT } from '../src/utils/consts';
import { server } from '../src/server';
import request from 'supertest';

server.start( PORT );

const mockUser = {
	username: 'Lesha',
	age: 20,
	hobbies: [ 'Sport' ]
};

describe('CRUD tests', () => {

  const req = request( `http://localhost:${ PORT }` );

  it('get', async () => {

    const res = await req.get( ENDPOINT );
    expect( res.status ).toBe( 200 );
    expect( res.body.length ).toBe( 0 );
  });

  it('post', async () => {

    const res = await req.post( ENDPOINT ).send( mockUser );

    expect( res.body.id ).toBeDefined();
  })

  it( 'invalid put', async () => {

    const res = await req.put( ENDPOINT ).send(mockUser);

    expect( res.status ).toBe( 400 );
  })

  it( 'del', async () => {

    const res = await req.post( ENDPOINT ).send( mockUser );
    expect( res.body.id ).toBeDefined();

    const delRes = await req.delete( `${ENDPOINT}/${res.body.id}`);
    expect( delRes.body.id ).toBeUndefined();
  })

  it( 'invalid get', async () => {

    const res = await req.get( '/wrong' );
    expect( res.status ).toBe( 404 );
  });

});


