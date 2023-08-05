type NewPick<T, K extends keyof T> = {
  [key in K]: T[key]
}

interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = NewPick<Todo, "description" | "completed">
