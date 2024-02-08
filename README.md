# small-pair

lookup smallest pieces from tuples.

separates tuples into small piecies.

## how to use

```
// tuples are different schema however we want to know all 'mixin's from all 'union'.

// start
// union shows {
//    firstname: any;
//    lastname: any;
//    address: any;
//    email: any;
// }
// however, we hard to know what types the union is consists of ?

const p = pieces([
    { firstname: 1, lastname: 1 },
    { firstname: 1 },
    { address: 1, email: 1, },
    { address: 1, email: 1, firstname: 1 },
]);

// goal
// result shows the union with ...
// mixin A { lastname }
// mixin B { firstname }
// mixin C { address, email }

console.log(p);
// [
//     { lastname: 1 },
//     { firstname: 1 },
//     { address: 1, email: 1, },
// ]
```
