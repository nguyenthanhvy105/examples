
Examples
===
Simple Admin App built using Angular 7 and Bootstrap 4

[Demo](https://nguyenthanhvy105.github.io/examples)
===
Tasks to do for running the project:
===
Quickly get a project started with any of our examples ranging from using parts of the framework to custom components and layouts.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.

- Angular 7
- TypeScript 3
- RxJS 6.2.0
- iNet Core 0.7.9
- iNet UI 0.7.14
- Bootstrap 4.1.1 
- Ngx-bootstrap 3.1.2

Features
===
- Integrate with iCloud Platform modules
- CAS Authentication
- Custom components
- Grid
- Select & Tags
- ListView
- Forms
- File Upload

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

## iNet Developer Tool - Chrome Extension

Use extension to access remote server and prevent CORS when develop on localhost. 

- Install extension 
``` 
https://chrome.google.com/webstore/detail/inet-developer-tool/hgmdmgbfllloocljiffneifcepeafkpg
```
- Config server domain and start: calista.inetcloud.vn,inetcloud.vn



Contributors:
===
- Vy Nguyen <ntvy@inetcloud.vn>
- Hanh Le <hanhld@inetcloud.vn>
- An Tran <anttt@inetcloud.vn>
- Van Nguyen <vannbt@inetcloud.vn>
