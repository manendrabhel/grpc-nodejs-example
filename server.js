const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

const PROTO_PATH = path.join(__dirname, 'protos/greeter.proto');

const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const greeterProto = grpc.loadPackageDefinition(packageDefinition).greeter;

function sayHello(call, callback) {
  const name = call.request.name;
  callback(null, { message: `Hello, ${name}!` });
}

const server = new grpc.Server();
server.addService(greeterProto.Greeter.service, { SayHello: sayHello });

const PORT = 'localhost:50051';
server.bindAsync(PORT, grpc.ServerCredentials.createInsecure(), () => {
  console.log(`gRPC server running at ${PORT}`);
  server.start();
});
