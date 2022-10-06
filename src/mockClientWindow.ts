/**
 * This helper function will mock the clientHeight and clientWidth of the window object.
 *
 * @param options
 * @param {number} options.height defaults to 1000
 * @param {number} options.width defaults to 1000
 *
 */
const mockClientWindow = ({ height = 1000, width = 1000 }): void => {
    let mockedWidth: jest.SpyInstance<number, []>;
    let mockedHeight: jest.SpyInstance<number, []>;

    beforeEach(function () {
        mockedWidth = jest
            .spyOn(window.HTMLElement.prototype, "clientWidth", "get")
            .mockImplementation(() => width);

        mockedHeight = jest
            .spyOn(window.HTMLElement.prototype, "clientHeight", "get")
            .mockImplementation(() => height);
        jest.useFakeTimers();
    });

    afterEach(() => {
        mockedWidth.mockReset();
        mockedHeight.mockReset();
        jest.runAllTimers();
    });
};

export { mockClientWindow };
