import {camelcase} from "../camelcase";

describe("Camel case test suite", ()=> {
    it('should return empty string an empty string', () => {
        expect(camelcase("")).toBe("")
    })
    it('should return Foo from Foo', () => {
        expect(camelcase("Foo")).toBe("Foo")
    })
    it('should return Iker from iker', () => {
        expect(camelcase("iker")).toBe("Iker")
    })
    it('should return IkerMacaya from iker macaya', () => {
        expect(camelcase("iker macaya")).toBe("IkerMacaya")
    })
    it('should return IkerMacayaDeveloper from iker macaya Developer', () => {
        expect(camelcase("iker macaya Developer")).toBe("IkerMacayaDeveloper")
    })
})