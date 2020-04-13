# react-material-ui-mobx-starter

A sample project bringing mobx, Material UI and Typescript together within the [Create React App](https://github.com/facebook/create-react-app) framework

## Jetbrains IDEs

This repository has a [component template](./jetbrains-component-template.tsx) that can be added to Jetbrains IDEs
(e.g. GoLand, Intellij, Webstorm, RubyMine, CLion, Pycharm etc.) that scaffolds a functional component that observes
mobx changes and is styled with Material UI. Copy and paste the contents of the file into the Jetbrains template editor
to use it.

## Layout

This starter follows the Create React App layout, in general, but adds the following `src` subdirectories by default:

### [`components`](./src/components)

This is where your react components live.

### [`stores`](./src/stores)

This is where your mobx state lives

### [`themes`](./src/themes)

This is where your material UI themes live

## Other changes from Create React App

* Make all app ancestor components in the index HTML full size
* Remove all `.css` files on the basis that you're using Material UI styles
* Add [typescript shim templates](./src/themes/extensions.d.ts) for material UI themes, allowing you to add custom 
features to themes and have the compiler accept it.
* Add the following options to `tsconfig.json`:
    ```$xslt
    "noImplicitAny": true,
    "suppressImplicitAnyIndexErrors": true,
    "strictNullChecks": true,
    "experimentalDecorators": true
    ```