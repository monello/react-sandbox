// We use the "declare module" statement to describe to TS how CSS module import look

// - Every import from a ".css" file exports the following
declare module '*.css' {
    // - it exports a css object where the where the CSS rules are turned into key-value pairs. Keys are the CSS "selectors" and the values are the CSS "declarations" (see: https://ironion.com/blog/2015/06/12/anatomy-of-a-css-rule/)
    // - The values will be turned into class-scoped names (a unique-value)
    // - We use an Index Signature, because cannot possibly know beforehand what all the key-names will be, but we know they will be strings and the values will be strings
    const css: { [key: string]: string; };
    // CSS modules always export this object by default as "default", so we need to also inform TS about that
    export default css;
}
