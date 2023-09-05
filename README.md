# @kyushun/nix

**@kyushun/nix** is a tool that detects the npm package manager used in your repository (npm, yarn, pnpm, etc.) and runs the corresponding commands, simplifying your npm experience.

## Features

- **Unified Command Structure**: Execute operations without switching between command prefixes.
- **Cross-Environment Compatibility**: Runs wherever npm is available.
- **Automatic Detection**: Adapts to the npm package manager in your repo.

Inspired by [@antfu/ni](https://github.com/antfu/ni) and [azu/ni.zsh](https://github.com/azu/ni.zsh), this package adopts the core functionality of [@antfu/ni](https://github.com/antfu/ni) but offers a more unified command structure. Unlike [@antfu/ni](https://github.com/antfu/ni), which uses different prefixes for various commands like install, run, upgrade, and uninstall, our tool maintains a consistent command prefix across all operations. Additionally, while [azu/ni.zsh](https://github.com/azu/ni.zsh) is restricted to the zsh environment, our package can be used wherever npm is available.

## Installation

```sh
npm i -g @kyushun/nix
```

## Usage

```sh
nix                          -- installs dependencies
nix add/install <pkg>        -- adds a package
nix remove/uninstall <pkg>   -- removes a package
nix [run] <script>           -- runs npm scripts
nix upgrade/update [<pkg>]   -- upgrades packages
nix exec <command>           -- executes a command directly
nix dlx <pkg>                -- downloads and executes a package command
```
