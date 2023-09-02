import "dotenv/config";
import * as process from "process";
import express from "express";

const port = 8080;
const host = "0.0.0.0";
const app = express();

export const environment = (): string => {
    if (process.env.ENVIRONMENT) {
        return process.env.ENVIRONMENT;
    } else {
        throw new Error("env var ENVIRONMENT is required");
    }
}

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, host, () => {
    console.log(`Hello World! Welcome to the ${environment()} environment`);
    console.log(`Running on http://${host}:${port}`);
});
