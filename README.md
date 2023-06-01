
![Logo](https://raw.githubusercontent.com/skiff-org/skiff-org.github.io/main/assets/updates/skiff-ui-og.png)


# Skiff UI – Design System

Skiff UI is an open-source React component library based on a collection of reusable interface elements used in Skiff. It offers a wide range of customizable components for web apps, empowering you to create beautiful and user-friendly interfaces.

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/skiff-org/skiff-ui/blob/main/LICENSE)
[![npm latest package](https://img.shields.io/npm/v/@skiff-org/skiff-ui/latest.svg)](https://www.npmjs.com/package/@skiff-org/skiff-ui)
[![Average time to resolve an issue](https://isitmaintained.com/badge/resolution/skiff-org/skiff-ui.svg)](https://isitmaintained.com/project/skiff-org/skiff-ui 'Average time to resolve an issue')
[![Open Collective backers and sponsors](https://img.shields.io/opencollective/all/skiff)](https://opencollective.com/skiff)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)
[![Follow on Twitter](https://img.shields.io/twitter/follow/Skiff_hq.svg?label=follow+Skiff)](https://twitter.com/skiffprivacy)

## Documentation

[Skiff UI Documentation](https://skiff.com/ui)


## Installation

Inside your project, run either of the commands below to add Skiff UI:

```bash
  # Install Skiff UI with npm
  npm install @skiff-org/skiff-ui --save
```

```bash
  # Install Skiff UI with yarn
  yarn add @skiff-org/skiff-ui
```
    
## Using Skiff UI inside your app

Integrate Skiff components into your project easily, as shown below:

```typescript
  import { Button, Type } from '@skiff-org/skiff-ui';
  <Button onClick={onClick} type={Type.SECONDARY}>
    Click me
  </Button>
```

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/button-example-rfp4jn)


## ThemeProvider
To display Skiff UI components correctly, add the ThemeProvider at the root of your app.


```typescript
  import * as React from 'react';
  import { ThemeProvider } from '@skiff-org/skiff-ui';

  function App({ Component }) {
    return (
      <ThemeProvider>
        <Component />
      </ThemeProvider>
    );
  }
```


## Feedback

If you have any feedback, please reach out to us at support@skiff.org


## Contributing

Contributions are always welcome! See [contributing.md](/CONTRIBUTING.md) for ways to get started.

Please adhere to this project's [code_of_conduct.md](/CODE_OF_CONDUCT.md).


## Related

Our open source repositories and libraries

[Skiff Mail](https://github.com/skiff-org/skiff-mail)

[Skiff Windows App](https://github.com/skiff-org/skiff-windows-app)

[AEAD Library](https://www.npmjs.com/package/@skiff-org/typed-envelopes)

[Prosemirror Tables](https://github.com/skiff-org/prosemirror-tables)

## License

[MIT](https://choosealicense.com/licenses/mit/)

