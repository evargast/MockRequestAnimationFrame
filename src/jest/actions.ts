const jest_temp = jest;

// Jest's list of globals: https://jestjs.io/docs/en/api
const afterAll_temp = afterAll;
const afterEach_temp = afterEach;
const beforeAll_temp = beforeAll;
const beforeEach_temp = beforeEach;
const describe_temp = describe;


export { jest_temp as jest };
export { afterAll_temp as afterAll };
export { afterEach_temp as afterEach };
export { beforeAll_temp as beforeAll };
export { beforeEach_temp as beforeEach };
export { describe_temp as describe };
