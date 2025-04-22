# gRPC Node.js Example

This is a simple gRPC service built with Node.js that demonstrates how to define and use a gRPC API using Protocol Buffers.

## Features

- gRPC server and client implemented in Node.js
- Protocol Buffers for message definition
- Lightweight and fast communication
- Example `SayHello` RPC

## Requirements

- Node.js
- `protoc` Protocol Buffers Compiler

## Setup Instructions

1. Clone the repository or download the ZIP.
2. Install dependencies:

```bash
npm install
```

3. Start the gRPC server:

```bash
npm run start:server
```

4. In a new terminal, start the gRPC client:

```bash
npm run start:client
```

You should see the following output:

```
Server response: Hello, Manendra!
```

## Project Structure

```
grpc-nodejs-example/
├── client.js
├── server.js
├── package.json
├── protos/
│   └── greeter.proto
```

## License

This project is licensed under the MIT License.
