/**
 * This helper function is intended to be used with Jest. It will fully mock a [request animation frame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) (RAF). 
 * 
 * Specially designed for [Adobe React Spectrum](https://react-spectrum.adobe.com/react-spectrum/index.html) components but will work for any library that requires to mock a RAF.
 */
function mockRequestAnimationFrame(): void {
  let offsetWidth: jest.SpyInstance<number, []>;
  let offsetHeight: jest.SpyInstance<number, []>;

  // Use beforeEach to ensure mocks work with jest configs using resetMocks or restoreMocks
  // Create React App has resetMocks enabled by default
  beforeEach(function () {
    // ---- Give it a mock height and width so the frame can be rendered----
    offsetWidth = jest
      .spyOn(window.HTMLElement.prototype, "clientWidth", "get")
      .mockImplementation(() => 1000);

    offsetHeight = jest
      .spyOn(window.HTMLElement.prototype, "clientHeight", "get")
      .mockImplementation(() => 1000);

    // ---------- Hijack & mock animation----------
    window.HTMLElement.prototype.scrollIntoView = jest.fn();
    jest
      .spyOn(window, "requestAnimationFrame")
      .mockImplementation((callback) => setTimeout(callback, 0));

    // ---------- Detect UI as browser by default https://github.com/adobe/react-spectrum/blob/main/packages/@react-spectrum/utils/src/useIsMobileDevice.ts#L23 ----------
    jest.spyOn(window.screen, "width", "get").mockImplementation(() => 1024);

    // ---------- Mock clock that animation uses for rendering----------
    jest.useFakeTimers();
  });

  afterEach(() => {
    /** Exhaust timers in case there are any animations
     *  waiting to be rendered similar to using a waitFor() */
    jest.runAllTimers();
    offsetWidth.mockReset();
    offsetHeight.mockReset();
  });

  afterAll(function () {
    /* Reset everything so all other tests can run without interference */
    jest.useRealTimers();
  });
}

export default mockRequestAnimationFrame;
