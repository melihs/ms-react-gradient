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
import TextGradient from 'ms-react-gradient';

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

<table>
<tr>
<td>
text (required)
</td>
<td>
 content
</td>
</tr>
<tr>
<td>
type (default: linear)
</td>
<td>
 specifies which gradient type the text will be.
</td>
</tr>
<tr>
<td>
color1 (required)
</td>
<td>
first color
</td>
</tr>
<tr>
<td>
color2 (required)
</td>
<td>
second color
</td>
</tr>
<tr>
<td>
startPosition (required)
</td>
<td>
Percent passage of the first color</td>
</tr>
<tr>
<td>
endPosition
</td>
<td>
Percent passage of the second color
</td>
</tr>
<tr>
<td>
style
</td>
<td>
Custom style definition
</td>
</tr>
</table>
