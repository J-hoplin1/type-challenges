// https://github.com/type-challenges/type-challenges/blob/main/questions/00268-easy-if/README.md

type IfType<C extends boolean, T, F> = C extends true ? T : F

type IfTestA = IfType<true, "a", "b">
type IfTestB = IfType<false, "a", "b">
