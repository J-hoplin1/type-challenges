type MyExclude<T, K> = T extends K ? never : T

type Res = MyExclude<"a" | "b" | "c", "a">

type test = "a" | never
