const { pieces } = require(".");

describe("tests small-pair", () => {
    it("empty tuples returns empty pieces", () => {
        expect(pieces([])).toEqual([]);

        expect(pieces([{}])).toEqual([]);
    });
    it("same tuples consists of same piece", () => {
        expect(pieces([
            { a: 1 },
            { a: 1 },
        ])).toEqual([
            { a: 1 },
        ]);
        expect(pieces([
            { a: 1, b: 1 },
            { a: 1, b: 1 },
        ])).toEqual([
            { a: 1, b: 1 },
        ]);
    });

    it("pieces from tuples", () => {
        expect(pieces([
            { a: 1 },
            { a: 1, b: 1 },
        ])).toEqual([
            { b: 1 },
            { a: 1 },
        ]);
        expect(pieces([
            { a: 1 },
            { b: 1 },
        ])).toEqual([
            { a: 1 },
            { b: 1 },
        ]);

        expect(pieces([
            { a: 1 },
            { a: 1, b: 1 },
            { b: 1, c: 1 },
        ])).toEqual([
            { a: 1 },
            { c: 1 },
            { b: 1 },
        ])

        expect(pieces([
            { a: 1, },
            { a: 1, b: 1 },
            { a: 1, b: 1, c: 1 },
        ])).toEqual([
            { c: 1 },
            { b: 1 },
            { a: 1 },
        ]);

        expect(pieces([
            { a: 1, c: 1 },
            { a: 1, b: 1 },
            { a: 1, b: 1, c: 1 },
        ])).toEqual([
            { c: 1 },
            { b: 1 },
            { a: 1 },
        ]);

        expect(pieces([
            { firstname: 1, lastname: 1 },
            { handlename: 1 },
            { address: 1, email: 1, },
        ])).toEqual([
            { firstname: 1, lastname: 1 },
            { handlename: 1 },
            { address: 1, email: 1, },
        ]);

        expect(pieces([
            { firstname: 1, lastname: 1 },
            { firstname: 1 },
            { address: 1, email: 1, },
            { address: 1, email: 1, firstname: 1 },
        ])).toEqual([
            { lastname: 1 },
            { firstname: 1 },
            { address: 1, email: 1, },
        ]);
    });
});
