# grpc-web-todolist

This repository demonstrates the usage of grpc-web with reactjs and a Go microservice.

## Directories:

- api - Contains the gRPC/proto definitions
- envoy - Contains the envoy configuration for grpc-web to grpc proxying
- time - time microservice in Go, listens on port 9090 for gRPC connections
- frontend - simple reactjs application

## Usage:

- `make proto` - Generate proto client
