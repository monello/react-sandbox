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

# Concurrently Notes

Concurrently allows you to run multiple processes in the same Terminal
For example (without it) you have to run `tsc -w` and `yarn nodemon -q -w dist dist/index.js` in two separate terminals to make them work as a team
With concurrently you can run them in the same terminal as one long command

### install `concurrently` as a dev dependency

```bash
yarn add -D concurrently
```

Now run:

```bash
yarn concurrently "tsc -w" "yarn nodemon -q -w dist dist/index.js"
```

Each process will be labelled with numbers by default: [0] and [1] etc

### Setting Custom names and colours for the processes

```bash
yarn concurrently -n TSC,NODEMON -c yellow,green "tsc -w" "yarn nodemon -q -w dist dist/index.js"
```

### If one of the processes fail we want all the processes killed because they all need to run ... well concrrently (as a team) to work

Add the kill flag <span style="background-color: yellow">`-k`</span>

```bash
yarn concurrently -k -n TSC,NODEMON -c yellow,green "tsc -w" "yarn nodemon -q -w dist dist/index.js"
```

### Run concurrency as a NPM "develop" script in _package.json_

```json
    "scripts": {
        "build": "tsc",
        "develop": "yarn concurrently -k -n TSC,NODEMON -c yellow,green \"tsc -w\" \"yarn nodemon -q -w dist dist/index.js\""
    },
```

Now run:

```bash
yarn run develop
```
