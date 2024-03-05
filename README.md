<h1 align='center'> ms-react-gradient
</h1>

<p align='center'>React component for creating gradient texts

### Install

```js
$ npm install ms-react-gradient
```

or

```
$ yarn add ms-react-gradient
```

### Demo link

> [storybook](https://65e446d14e4260bdc8726536-iblunfkwul.chromatic.com)

### Usage

```js
import TextGradient from 'ms-react-gradient/src';

<TextGradient
    text="example text"
    type="linear"
    color1="#121fcf"
    color2="#13cf50"
    startPosition="20"
    endPosition="90"
 />
```

### Props/Options

| Name          | Description                                     | Default | type                                                                                               |
|---------------|-------------------------------------------------|---------|----------------------------------------------------------------------------------------------------|
| text          | content                                         |         | string                                                                                             |
| type          | specifies which gradient type the text will be. | linear  | string                                                                                             |
| color1        | first color                                     | 100     | number                                                                                             |
| color2        | second color                                    |         | "linear" \| "radial" \| "elliptical" \|  "repeat-linear" \| "repeat-radial" \| "repeat-elliptical" |
| startPosition | Percent passage of the first color              | 0       | string \| number                                                                                   |
| endPosition   | Percent passage of the second color             | 100     | string \| number                                                                                   |
| style         | Custom style definition                         |         | number                                                                                             |
