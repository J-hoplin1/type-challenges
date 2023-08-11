// https://github.com/type-challenges/type-challenges/blob/main/questions/00533-easy-concat/README.md

type ConcatTuple = readonly unknown[]

type ConcatType<T extends ConcatTuple, U extends ConcatTuple> = [...T, ...U]

type ConcatTypeResult = ConcatType<[1], [2]>
