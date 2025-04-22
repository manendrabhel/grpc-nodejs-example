import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';

const PROTO_PATH = path.join(__dirname, '../protos/greeter.proto');

const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const greeterProto = grpc.loadPackageDefinition(packageDefinition).greeter as any;

function sayHello(call: grpc.ServerUnaryCall<any, any>, callback: grpc.sendUnaryData<any>) {
  const name = call.request.name;
  callback(null, { message: `Hello, ${name}!` });
}

const server = new grpc.Server();
server.addService(greeterProto.Greeter.service, { SayHello: sayHello });

const PORT = '0.0.0.0:50051';
server.bindAsync(PORT, grpc.ServerCredentials.createInsecure(), () => {
  console.log(`gRPC server running at ${PORT}`);
  server.start();
});
