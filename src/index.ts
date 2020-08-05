
import { afterAll, afterEach, beforeAll, jest } from './jest/actions';
function mockRequestAnimationFrame(): void {
    let offsetWidth: jest.SpyInstance<number, []>;
    let offsetHeight: jest.SpyInstance<number, []>;

    beforeAll(function () {
        // ---- Give it a mock height and width so the frame can be rendered----
        offsetWidth = jest
            .spyOn(window.HTMLElement.prototype, "clientWidth", "get")
            .mockImplementation(() => 1000);

        offsetHeight = jest
            .spyOn(window.HTMLElement.prototype, "clientHeight", "get")
            .mockImplementation(() => 1000);

        // ---------- Hijack & mock animation----------
        window.HTMLElement.prototype.scrollIntoView = jest.fn();
        jest.spyOn(
            window,
            "requestAnimationFrame",
        ).mockImplementation(callback => setTimeout(callback, 0));

        // ---------- Mock clock that animation uses for rendering----------
        jest.useFakeTimers();
    });

    afterEach(() => {
        /** Exhaust timers in case there are any animations
         *  waiting to be rendered similar to using a waitFor() */
        jest.runAllTimers();
    });

    afterAll(function () {
        /* Reset everything so all other tests can run without interference */
        jest.useRealTimers();
        offsetWidth.mockReset();
        offsetHeight.mockReset();
    });
}

export default mockRequestAnimationFrame ;
