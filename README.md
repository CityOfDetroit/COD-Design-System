# COD-Design-System

Design System proof of concept

## Getting Started

This project was created using:

- [Webpack](https://webpack.js.org/) as a web application bundler.
- [Yarn](https://classic.yarnpkg.com/en/) to manage project dependencies.
- [MapLibre](https://maplibre.org/) for map framework.
- [Storybook](https://storybook.js.org/) for UI component management.

## Using in Your Project

1. Load package into your project
   ```
   yarn add @cityofdetroit/cod-design-system
   ```
   ```
   npm i @cityofdetroit/cod-design-system
   ```

## Contributing

### Setup Local Environment

1. Download the repo.
   ```
   $ git clone git@github.com:jedgar1mx/COD-Design-System.git
   ```
2. Install node dependencies.

   ```
   $ yarn
   ```

3. Run local instance.

   ```
   $ yarn storybook
   ```

4. Build storybook.
   ```
   $ yarn build-storybook
   ```

### Testing

Use Storybooks [built-in test-runner](https://storybook.js.org/docs/react/writing-tests/test-runner):

1. Run a local instance of storybook in one process.

2. Invoke the test runner in another. Note: depending on the power of you machine, you may have to reduce concurrent workers to avoid test timeout failures. Use `--maxWorkers=2` to limit the workers to two.
   ```
   $ yarn test-storybook
   ```
