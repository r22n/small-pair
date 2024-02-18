
export type Tuple = {
    [value in string]: any;
};

export function pieces(tuples: Tuple[]) {
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
    //   22222
    // 44   4444
    //  888 8       +
    // ----------------
    // 5dbb2e64411  
    //          jk
    //        hi
    //       g
    //      f
    //     e
    //   cd
    //  b
    // a
    // are prime pieces;

    const memo: { [value in string]: number/*of memo*/ } = {};

    // helpers
    let cup = 1;
    const add = (value: string) => {
        if (memo[value] == null) {
            memo[value] = cup;
        } else {
            memo[value] += cup;
        }
    };

    tuples.forEach(t => {
        Object.keys(t).forEach(add);
        cup *= 2;
    });


    const res: { [memo in number]: Tuple } = {};
    Object.entries(memo).forEach(([value, memo]) => {
        let r = res[memo];
        if (!r) {
            r = res[memo] = {};
        }
        r[value] = 1;
    });
    return Object.values(res);
}