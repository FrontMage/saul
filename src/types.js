export type TestParams = {
  args: string,
  engineName: string,
  funcName: string,
  output: string,
  testDescription: string
};

export type ExecutableParams = {
  function: Function,
  testDescription: string,
  args: Array<any>,
  engine: (
    testDescription: string,
    component: Function,
    argsArray: Array<any>,
    expected: string
  ) => void,
  output: string
};
