type UnshiftTuple = readonly unknown[]

type UnshiftType<T extends UnshiftTuple, U> = [U, ...T]

type UnshiftResult = UnshiftType<[1, 2], 0>
