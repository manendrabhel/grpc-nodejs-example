import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';

const PROTO_PATH = path.join(__dirname, '../protos/greeter.proto');

const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const greeterProto = grpc.loadPackageDefinition(packageDefinition).greeter as any;

const client = new greeterProto.Greeter('localhost:50051', grpc.credentials.createInsecure());

client.SayHello({ name: 'Manendra' }, (error: any, response: any) => {
  if (!error) {
    console.log('Server response:', response.message);
  } else {
    console.error('Error:', error.message);
  }
});
