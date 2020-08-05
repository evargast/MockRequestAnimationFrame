# Mock Request Animation Frame

This helper function is intended to be used with Jest. It will fully mock a [request animation frame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) (RAF). 

This will come in really handy if you are running tests on components that use [Adobe React Spectrum](https://react-spectrum.adobe.com/react-spectrum/index.html).

## Getting started

You will have to call this helper function in each test **file** that will encounter an RAF while executing, see the example below for details on how to use it. 

### Example

Here is an example of how to implement this function.

```javascript
// one-of-your-test-files
import mockRequestAnimationFrame from 'mock-request-animation-frame';

mockRequestAnimationFrame();

// Run your tests here :) 
```
&nbsp;
&nbsp;
&nbsp;
&nbsp;

## <div align="center"> Happy testing! 🔬</div>
