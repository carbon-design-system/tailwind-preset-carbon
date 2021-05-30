# tailwind-preset-carbon

> Tailwind preset for the Carbon Design System

## Getting started

To install `tailwind-preset-carbon` in your project, you will need to run the
following command using [npm](https://www.npmjs.com/):

```bash
npm install -S tailwind-preset-carbon
```

If you prefer [Yarn](https://yarnpkg.com/en/), use the following command
instead:

```bash
yarn add tailwind-preset-carbon
```

## Usage

You can configure tailwind to use `tailwind-preset-carbon` with the `presets`
option:

```js
module.exports = {
  presets: ['tailwind-preset-carbon'],
};
```

If you would like to use a specific theme, pass in the theme name after the
preset name. For example, to use the `g90` theme do the following:

```js
module.exports = {
  presets: ['tailwind-preset-carbon/g90'],
};
```

This preset includes the following custom configuration with Tailwind:

- Colors from the IBM Design Language
- Tokens from the Carbon Design System
  - Colors
  - Spacing
- Helpers
  - Aspect Ratio
  - Breakpoints
  - Font families

## 📚 Examples

If you're looking for more examples on how to use `tailwind-preset-carbon`, we
have some examples that you can check out:

- [Nextjs](./examples/nextjs)

## 🙌 Contributing

We're always looking for contributors to help us fix bugs, build new features,
or help us improve the project documentation. If you're interested, definitely
check out our [Contributing Guide](/.github/CONTRIBUTING.md)! 👀

## 📝 License

Licensed under the [Apache 2.0 License](/LICENSE).
