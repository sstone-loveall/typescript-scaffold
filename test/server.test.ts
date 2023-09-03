import { serverConfiguration } from "../src/server";

describe("Server", () => {
    it("returns the environment env var", () => {
        expect(serverConfiguration.environment).toEqual("local");
        expect(serverConfiguration.host).toEqual("0.0.0.0");
        expect(serverConfiguration.port).toEqual(3000);
    });
});