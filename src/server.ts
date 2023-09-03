import "dotenv/config";
import express from 'express'
import http from "http";
import * as OpenApiValidator from 'express-openapi-validator';
import * as path from "path";
import * as process from "process";
import { ServerConfiguration } from "./types";

/**
 * Create the application
 * @param serverConfiguration server settings
 */
export async function createServer(serverConfiguration: ServerConfiguration) {
    const server = express();
    server.use(express.json());
    server.use(express.text());
    server.use(express.urlencoded({extended: false}));

    const apiSpec: string = path.join(__dirname, '../openapi.yaml');
    server.use('/spec', express.static(apiSpec));
    server.use(
        OpenApiValidator.middleware({
            apiSpec: apiSpec,
            validateRequests: true,
            validateResponses: true,
        }),
    );

    server.get('/', (req, res) => {
        res.sendStatus(200);
    });

    server.get('/hello', (req, res) => {
        res.json({message: `Hello World`});
    });

    server.use((err: any, req: any, res: any, next: any) => {
        console.error(err);
        res.status(err.status || 500).json({
            message: err.message,
            errors: err.errors,
        });
    });
    http.createServer(server).listen(serverConfiguration.port);

    console.log(`Welcome to the ${serverConfiguration.environment} Service`);
    console.log(`Running on http://${serverConfiguration.host}:${serverConfiguration.port}`);
}

const environment = (): string => {
    if (process.env.ENVIRONMENT) {
        return process.env.ENVIRONMENT;
    } else {
        throw new Error("env var ENVIRONMENT is required");
    }
}

export const serverConfiguration: ServerConfiguration = {
    host: process.env.HOST || "0.0.0.0",
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
    environment: environment(),
};

createServer(serverConfiguration).catch(err => {
    console.error(`Error: ${err}`);
});