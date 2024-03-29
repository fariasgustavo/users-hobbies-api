import { SetupServer } from '../src/server';
import supertest from 'supertest';
import { DatabaseConnection } from '../src/infra/protocols/database-connection.protocol';
import { MongodbConnection } from '../src/infra/mongodb-connection.infra';

let server: SetupServer;

beforeAll(async () => {
  const database: DatabaseConnection = new MongodbConnection(
    'mongodb://localhost:27018/UserHobbiesTest',
  );
  const server = new SetupServer(database);
  await server.init();

  console.log(2133333);

  global.testRequest = supertest(server.getApp());
});

afterAll(async () => await server.close());
