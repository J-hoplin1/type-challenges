/**
 * 만약에 Promise 안에 또다른 Promise가 있다면
 *
 * 해당 Promise가 가지고 있는 타입을 재귀적으로 검사해준다.
 *
 * Promise와 PromiseLike는 차이점이 있다.
 *
 * Promise의 경우에는 then finally catch 모두 지원하지만,
 *
 * PromiseLike의 경우에는 then만 정의가 되어있는데 이는 과거에 Promise가 처음 등장했을때 then만 지원하는 라이브러리가 많았기 때문이라 한다
 */

type MyAwaited<T extends PromiseLike<any | Promise<any>>> =
  T extends PromiseLike<infer V>
    ? V extends PromiseLike<any>
      ? MyAwaited<V>
      : V
    : never

type ExampleType = Promise<string>

type AwaitResult = MyAwaited<ExampleType>
