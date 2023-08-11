type ExcludeQ<T, U> = T extends U ? never : T

type Result = ExcludeQ<"a" | "b" | "c", "a">
