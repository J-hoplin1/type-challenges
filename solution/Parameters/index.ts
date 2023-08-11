// https://github.com/type-challenges/type-challenges/blob/main/questions/03312-easy-parameters/README.md

type ParametersFunctionType = (...args: any[]) => any

type ParametersType<T extends ParametersFunctionType> = T extends (
  ...args: infer Params
) => any
  ? Params
  : never

const foo = (arg1: string, arg2: number): void => {}
type fooFunctionParamType = ParametersType<typeof foo>
