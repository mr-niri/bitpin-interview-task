# BitPin Technical Task

This React project is developed as a part of technical interview for Front-End Developer position at BitPin.

## Introduction
The goal is to retrieve a relatively large list of markets from an API endpoint and view them to user and receive live price updates via WebSocket.

We employ virtual lists, a technique designed to boost rendering performance significantly. By displaying only the items currently visible during scrolling, we optimize the user experience, particularly when handling extensive datasets. This approach prevents unnecessary rendering of off-screen items, ensuring a smooth interface without performance bottlenecks.

## Requirements

Make sure you have the following tools installed:

- [NodeJS](https://nodejs.org) (v18 or higher)
- [pnpm](https://pnpm.io)
- [Docker](https://www.docker.com/get-started) (optional)

## Notable Dependencies

- Jotai: State management library
- MUI (Material-UI): React UI components framework
- React Query: Data fetching and caching
- Axios: Promise-based HTTP client


## Running the Project

### Using PNPM (or other package managers)

```bash
pnpm install
pnpm dev:staging
```

The markets list would be available at [localhost:3006/dashboard](http://localhost:3006/dashboard).

### Using docker

If you prefer running the project in a Docker container:

1. Build the image
```bash
docker build -t bitpin-task .
```
2. Run the container
```bash
docker run -p 8080:80 bitpin-task
```

The project would be served on [localhost:8080/dashboard](http://localhost:8080/dashboard) by a Nginx server.

## Testing

To run tests, execute the following command:

```bash
pnpm test
```
