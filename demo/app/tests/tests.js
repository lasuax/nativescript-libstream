var Libstream = require("nativescript-libstream").Libstream;
var libstream = new Libstream();

describe("greet function", function() {
    it("exists", function() {
        expect(libstream.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(libstream.greet()).toEqual("Hello, NS");
    });
});