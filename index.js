"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pieces = void 0;
function pieces(tuples) {
    if (!tuples.length) {
        return [];
    }
    // e.g.
    // tuples = abcdjk, cdefg, abfghi, bcdf
    // ----------------
    // abcd     jk
    //   cdefg
    // ab   fghi
    //  bcd f
    // intersects and separats will be pieces...
    // abcdefghijk
    // -----------------
    // 1111     11
    //   66666
    // aa   aaaa
    //  fff f
    // bpmm6vgaa11 =
    // -------------------
    //          jk
    //        hi
    //       g
    //      f
    //     e
    //   cd
    //  b
    // a
    // are prime pieces;
    const memo = {};
    // helpers
    let cup = 1;
    const add = (value) => {
        if (memo[value] == null) {
            memo[value] = cup;
        }
        else {
            memo[value] += cup;
        }
    };
    tuples.forEach(t => {
        Object.keys(t).forEach(add);
        cup *= tuples.length;
    });
    const res = {};
    Object.entries(memo).forEach(([value, memo]) => {
        let r = res[memo];
        if (!r) {
            r = res[memo] = {};
        }
        r[value] = 1;
    });
    return Object.values(res);
}
exports.pieces = pieces;
