// Welcome to the TypeScript Playground, this is a website
// which gives you a chance to write, share and learn TypeScript.

// You could think of it in three ways:
//
//  - A location to learn TypeScript where nothing can break
//  - A place to experiment with TypeScript syntax, and share the URLs with others
//  - A sandbox to experiment with different compiler features of TypeScript

type ToList<N extends number, L extends any[] = []> = L["length"] extends N
    ? L
    : ToList<N, [1, ...L]>;

type Add<M extends number, N extends number> = [
    ...ToList<M>,
    ...ToList<N>
]["length"];

type MinusOne<N extends number> = ToList<N> extends [1, ...infer Rest]
    ? Rest["length"]
    : 0;

type PlusOne<N extends number> = [1, ...ToList<N>]["length"];

type Fib<N extends number> = N extends 1 | 2
    ? 1
    : Add<Fib<MinusOne<N>>, Fib<MinusOne<MinusOne<N>>>>;

type FibList<N extends number> = N extends 1
    ? [1]
    : [...FibList<MinusOne<N>>, Fib<N>];

type t = FibList<10>;

// To learn more about the language, click above in "Examples" or "What's New".
// Otherwise, get started by removing these comments and the world is your playground.
