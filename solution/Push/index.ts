//https://github.com/type-challenges/type-challenges/blob/main/questions/03057-easy-push/README.md

type PushTuple = readonly unknown[]

type PushType<T extends PushTuple, U> = [...T, U]
