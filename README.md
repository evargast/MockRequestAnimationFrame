# Mock Request Animation Frame

<a href="https://www.npmjs.com/package/mock-request-animation-frame">
    <img alt="npm" src="https://img.shields.io/npm/v/mock-request-animation-frame.svg?style=flat-square">
</a>

<a href="https://www.npmjs.com/package/mock-request-animation-frame">
    <img alt="npm" src="https://img.shields.io/npm/dt/mock-request-animation-frame?style=flat-square">
</a>

## Installation

```
yarn add -D mock-request-animation-frame
```

or

```
npm i -D mock-request-animation-frame
```

## Disclaimer

_These helper functions are intended to be used with Jest._

## Getting started

This module now comes with 2 helper functions! Specially designed for tests on components that use [Adobe React Spectrum](https://react-spectrum.adobe.com/react-spectrum/index.html).

1. **mockRequestAnimationFrame** - It will fully mock a [request animation frame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) (RAF). There are various components that leverage RAFs for rendering causing tests to break.

2. **mockClientWindow** - It will mock the height and width of the window object. Some components need dimensions for rendering, also breaking jest tests if not mocked.

You will have to call this helper functions in **each test file** that will encounter a RAF or needs window dimensions while executing.

Behind the scenes these functions use beforeEach, afterEach, beforeAll and afterAll thus it may be run at the top level of the file or at the top level of your `describe` statements see the examples below for more details.

### Examples

```javascript
// one-of-your-test-files
import { mockRequestAnimationFrame } from "mock-request-animation-frame";

mockRequestAnimationFrame();

// Run your tests here
```

or

```javascript
import { mockClientWindow } from "mock-request-animation-frame";

describe("example test", () => {
    mockClientWindow();

    // Run your tests here
});
```

&nbsp;
&nbsp;
&nbsp;
&nbsp;

## <div align="center"> Happy testing! 🔬</div>
