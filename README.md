# bunny-transfer

[![NPM Version](https://img.shields.io/npm/v/bunny-transfer?color=blue)](https://www.npmjs.com/package/bunny-transfer)

## Installation

```
npx --yes bunny-transfer@latest sync <from> <to...>
npx --yes bunny-transfer@latest move <from> <to...>
npx --yes bunny-transfer@latest empty <location...>
npx --yes bunny-transfer@latest purge <pull-zone...>
```

The difference between the [`sync`](https://bunny-launcher.net/bunny-transfer/commands/sync) and [`move`](https://bunny-launcher.net/bunny-transfer/commands/move) commands is that:

- The [`sync`](https://bunny-launcher.net/bunny-transfer/commands/sync) command will sync files to the destination, and delete files in the destination that do not exist in the source.
- The [`move`](https://bunny-launcher.net/bunny-transfer/commands/move) command will move files to the destination, and leave existing files in the destination that do not exist in the source.

## Documentation

Please read the [docs](https://bunny-launcher.net/bunny-transfer/quickstart/) for usage and examples.
