import "dotenv/config";
import * as process from "process";

export const environment = (): string => {
    if (process.env.ENVIRONMENT) {
        return process.env.ENVIRONMENT;
    } else {
        throw new Error("env var ENVIRONMENT is required");
    }
}

console.log(`Hello World! Welcome to the ${environment()} environment`);