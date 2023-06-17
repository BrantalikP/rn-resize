# rn-resize

This library provides a set of utilities for scaling and styling React Native components. It includes features such as scaling utilities, style creation, and a useStyles hook for dynamic styling based on your application's theme.

## Supported platforms

| iOS | Android | Web |
| :-: | :-----: | :-: |
| ✅  |   ✅    | ✅  |

## Installation

```sh
yarn add -D @brantalikp/rn-resize
```

## Usage

### Creating styles with `createStyle` function

You can create your styles using the `createStyle` function. This will create a stylesheet that automatically scales numeric values based on the screen size. Non-numeric values are left as they are. You can also provide your own base `width` and `height` values for scaling.

```js
import { createStyle } from '@brantalikp/rn-resize';

export const styles = createStyle(
  {
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'blue',
      width: 40, //  scales horizontally
      height: 35, //  scales vertically
    },
  },
  { baseWidth: 360, baseHeight: 640 } // optional
);
```

### Creating themed styles

If you are using a `theme` in your application, you can create styles that use the theme properties. First, you need to wrap your application with the ThemeProvider and provide it your theme.

**Options:**

|   Option   |         value         |
| :--------: | :-------------------: |
| baseWidth  | number **(optional)** |
| baseHeight | number **(optional)** |

```js
import { ThemeProvider } from '@brantalikp/rn-resize';

// Your theme
const theme = {
  colors: {
    background: '#fff',
    text: '#000',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme} options={options}>
      {/* Your application */}
    </ThemeProvider>
  );
}

export default App;
```

Creating themed styles with TypeScript type checking and autocompletion

```js
// theme.ts
import { MakeStylesProps } from '@brantalikp/rn-resize';

export const myCustomTheme = {
  colors: {
    background: 'pink',
  },
} as const;

export type Theme = typeof myCustomTheme;

export type CreateStyles<T extends string> = MakeStylesProps<T, Theme>;

```

Then, you can create styles using your theme.

```js
import { CreateStyles } from './theme';

type StylesKeys = 'container' | 'text';

export const styles: CreateStyles<StylesKeys> = (theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
});
```

Finally, in your components, you can use the **useStyles** hook to access the themed styles

```js
import { useStyles } from '@brantalikp/rn-resize';
import { styles } from './styles';

function MyComponent() {
  const { container, text } = useStyles(styles);

  return (
    <View style={container}>
      <Text style={text}>My App</Text>
    </View>
  );
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
