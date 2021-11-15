# Welcome to my first react project

This project was created based on the proposal exercises available in the book **The Road to learn React\_ Your journey to master plain yet pragmatic React** by **Robin Wieruch**.

### Dependencies

**axios** - package to execute REST commands.

```shell
npm install axios
```

**react-test-renderer** - core package to build unit tests for react components.

```shell
npm install --save-dev react-test-renderer
```

**enzyme & enzyme-adapter-react-16** - packages to inspect react components being rendered.

```shell
npm install --save-dev enzyme react-addons-test-utils enzyme-adapter-react-16
```

**prop-types** - package to validate react component props and ensure their consistency (.i.e. valid data type, required field etc).

```shell
npm install prop-types
```

**@fortawesome/fontawesome-svg-core & @fortawesome/free-solid-svg-icons & @fortawesome/react-fontawesome** - package to display awesome icons among react components.

```shell
yarn add @fortawesome/fontawesome-svg-core
yarn add @fortawesome/free-solid-svg-icons
yarn add @fortawesome/react-fontawesome
```

### Helpful commands

1. Build a react project from scratch

```shell
npm install -g create-react-app
create-react-app <app-name>
cd <app-name>
```

2. Run react application

```shell
npm start
```

3. Run react tests

```shell
npm test
```

4. Build production package

```shell
npm run build
```

### Helpful links

**More about react unit tests** - https://testing-library.com/docs/react-testing-library/api/

**More about fontawesome for react** - https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react

**Jest plugin for Visual Code** -- https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest