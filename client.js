const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

const PROTO_PATH = path.join(__dirname, 'protos/greeter.proto');

const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const greeterProto = grpc.loadPackageDefinition(packageDefinition).greeter;

const client = new greeterProto.Greeter('localhost:50051', grpc.credentials.createInsecure());

client.SayHello({ name: 'Manendra' }, (error, response) => {
  if (!error) {
    console.log('Server response:', response.message);
  } else {
    console.error('Error:', error.message);
  }
});
