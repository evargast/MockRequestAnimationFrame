const WindowOptions = {
    height: 1000,
    width: 1000,
};

type WindowOptions = Partial<typeof WindowOptions>;

/**
 * This helper function will mock the clientHeight and clientWidth of the window object.
 *
 * @param options
 * @param {number} options.height defaults to 1000
 * @param {number} options.width defaults to 1000
 *
 */
const mockClientWindow = (options?: WindowOptions): void => {
    const finalOptionsConfig = { ...WindowOptions, ...options };
    let mockedWidth: jest.SpyInstance<number, []>;
    let mockedHeight: jest.SpyInstance<number, []>;

    beforeEach(function () {
        mockedWidth = jest
            .spyOn(window.HTMLElement.prototype, "clientWidth", "get")
            .mockImplementation(() => finalOptionsConfig.width);

        mockedHeight = jest
            .spyOn(window.HTMLElement.prototype, "clientHeight", "get")
            .mockImplementation(() => finalOptionsConfig.height);
        jest.useFakeTimers();
    });

    afterEach(() => {
        mockedWidth.mockReset();
        mockedHeight.mockReset();
        jest.runAllTimers();
    });
};

export { mockClientWindow };
