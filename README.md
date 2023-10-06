# PLACEHOLDER_REPO_NAME

> Template to kickstart creating a Node.js module using TypeScript and VSCode

Inspired by [node-module-boilerplate](https://github.com/sindresorhus/node-module-boilerplate)

## Features

- [Semantic Release](https://github.com/semantic-release/semantic-release)
- [Issue Templates]
- [GitHub Actions]
- [Codecov](https://about.codecov.io/)
- [VSCode Launch Configurations]
- [TypeScript](https://www.typescriptlang.org/)
- [Husky](https://github.com/typicode/husky)
- [Lint Staged](https://github.com/okonet/lint-staged)
- [Commitizen](https://github.com/search?q=commitizen)
- [Jest](https://jestjs.io/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## Getting started

### Set up your repository

Replace `FULL_NAME`, `GITHUB_USER`, `NODE_VERSION` and `REPO_NAME` in the `./customize.sh` script with your own details to personalize your new package: 

```bash
FULL_NAME="John Smith"
GITHUB_USER="johnsmith"
REPO_NAME="my-cool-package"
NODE_VERSION="18.17.1"
```
Add permission to edit `chmod +x ./customize.sh` and rund it `./customize.sh` 

### Add NPM Token

Add your npm token to your GitHub repository secrets as `NPM_TOKEN`.

### Add Codecov integration

Enable the Codecov GitHub App [here](https://github.com/apps/codecov).

**Remove everything from here and above**

---

# PLACEHOLDER_REPO_NAME

[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Code Coverage][codecov-img]][codecov-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]

> My awesome module

## Install

```bash
npm install PLACEHOLDER_REPO_NAME
```

## Usage

```ts
import { myPackage } from 'PLACEHOLDER_REPO_NAME';

myPackage('hello');
//=> 'hello from my package'
```

## API

### myPackage(input, options?)

#### input

Type: `string`

Lorem ipsum.

#### options

Type: `object`

##### postfix

Type: `string`
Default: `rainbows`

Lorem ipsum.

[build-img]:https://github.com/PLACEHOLDER_GITHUB_USER/PLACEHOLDER_REPO_NAME/actions/workflows/release.yml/badge.svg
[build-url]:https://github.com/PLACEHOLDER_GITHUB_USER/PLACEHOLDER_REPO_NAME/actions/workflows/release.yml
[downloads-img]:https://img.shields.io/npm/dt/PLACEHOLDER_REPO_NAME
[downloads-url]:https://www.npmtrends.com/PLACEHOLDER_REPO_NAME
[npm-img]:https://img.shields.io/npm/v/PLACEHOLDER_REPO_NAME
[npm-url]:https://www.npmjs.com/package/PLACEHOLDER_REPO_NAME
[issues-img]:https://img.shields.io/github/issues/PLACEHOLDER_GITHUB_USER/PLACEHOLDER_REPO_NAME
[issues-url]:https://github.com/PLACEHOLDER_GITHUB_USER/PLACEHOLDER_REPO_NAME/issues
[codecov-img]:https://codecov.io/gh/PLACEHOLDER_GITHUB_USER/PLACEHOLDER_REPO_NAME/branch/main/graph/badge.svg
[codecov-url]:https://codecov.io/gh/PLACEHOLDER_GITHUB_USER/PLACEHOLDER_REPO_NAME
[semantic-release-img]:https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]:https://github.com/semantic-release/semantic-release
[commitizen-img]:https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]:http://commitizen.github.io/cz-cli/
