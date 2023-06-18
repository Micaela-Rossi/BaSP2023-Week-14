let hasTestFailed = false;

beforeAll(() => {
  hasTestFailed = false;
});

afterEach((result) => {
  if (result.failedExpectations && result.failedExpectations.length > 0) {
    hasTestFailed = true;
  }
});

afterAll(() => {
  if (hasTestFailed) {
    console.error('Test failure detected. Stopping the test suite.');
    process.exit(1);
  }
});
