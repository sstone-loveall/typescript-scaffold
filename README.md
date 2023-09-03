# typescript-scaffold
A scaffold useful for a variety of TypeScript projects.

# Development

## Build
```shell
npm run build
```

## Test
```shell
npm run test
```

## Run in a local container
1. Build and run the Docker container.
```shell
# build container
npm run container-build

# run container
npm run container-run
```
2. Hit the service endpoint.
```shell
curl -i localhost:3000/hello
```
3. Shut down the container.
```shell
npm run container-stop
```

