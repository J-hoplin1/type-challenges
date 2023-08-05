type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

interface Todo2 {
  title: string
  description: string
}

const todo: MyReadonly<Todo2> = {
  title: "hello",
  description: "description",
}

// todo.title = "aa"
