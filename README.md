
Examples
===
[![NPM version][npm-version-image]][npm-url] [![NPM downloads][npm-downloads-image]][downloads-url]
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9d2344a877e54643bad3910bb9caab80)](https://www.codacy.com/gh/nguyenthanhvy105/examples/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=nguyenthanhvy105/examples&amp;utm_campaign=Badge_Grade)
[![Build Status](https://travis-ci.org/nguyenthanhvy105/examples.svg?branch=master)](https://travis-ci.org/nguyenthanhvy105/examples)

Simple Admin App built using Angular 12 and Bootstrap 4

[Demo](https://nguyenthanhvy105.github.io/examples)
===
Tasks to do for running the project
===
Quickly get a project started with any of our examples ranging from using parts of the framework to custom components and layouts.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.2
-  Angular 12
-  TypeScript 4
-  RxJS 6.6.7
-  iNet Core
-  iNet UI
-  Bootstrap & ngx-bootstrap

Features
===
-  Integrate with iCloud Platform modules
-  CAS Authentication
-  Custom components
-  Grid
-  Select & Tags
-  ListView
-  Forms
-  File Upload
-  Progressive Web App (PWA)

Build
===

Both the CLI and generated project have dependencies that require Node 6.9.0 or higher, together with NPM 3 or higher

**1.	Install npm from this site for your appropriate OS:  https://nodejs.org/en/download/**

**2.	Go to your project directory**

You may still want to run `npm` or `yarn` to manually
setup a local `node_modules` folder for editor and tooling support.

- Prepare Angular CLI and Typescript
```bash
npm install -g @angular/cli

npm install -g typescript
```
```bash
npm install
```
Or you could run `yarn` commands shown below:

Make sure that you have `yarn` installed; see instructions [here](https://yarnpkg.com/lang/en/docs/install/).
```bash
yarn install
```


**3.	Start the server using the command**

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component.

You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

Example Run `ng generate component pages/marketplace` to create a new page is Marketplace

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Build module for iCloud PlatForm

- Prepare  
```
sudo npm i -g bower gulp-cli
```
Run `gulp` to build the project for a module.

Contributors
===
- Vy Nguyen <ntvy@inetcloud.vn>
- Hanh Le <hanhld@inetcloud.vn>

[npm-url]: https://npmjs.org/package/inet-ui
[npm-version-image]: http://img.shields.io/npm/v/inet-ui.svg?style=flat
[npm-downloads-image]: http://img.shields.io/npm/dm/inet-ui.svg?style=flat
[downloads-url]: https://npmcharts.com/compare/inet-ui?minimal=true
