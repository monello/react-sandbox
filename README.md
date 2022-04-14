# TSC - TypeScript Compiler

### build a specific file

```bash
tsc src/index.ts
```

### build the entire project

```bash
tsc
```

### run in watch mode (separate terminal)

```bash
tsc -w
```

### add as an NPM build-script

in the _package.json_ add

```json
    "scripts": {
        "build": "tsc"
    },
```

run the build script

```bash
yarn run build
```

# nodemon notes

### run nodemon with just an entry script

```bash
yarn nodemon dist/index.js
```

### run nodemon to watch only the dist folder

```bash
yarn nodemon -w dist dist/index.js
```

### run nodemon in quit mode

```bash
yarn nodemon -q -w dist dist/index.js
```
