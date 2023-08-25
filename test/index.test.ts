import { environment } from "../src";

describe("Index", () => {
    it("returns the environment env var", () => {
        expect(environment()).toEqual("local");
    });
});