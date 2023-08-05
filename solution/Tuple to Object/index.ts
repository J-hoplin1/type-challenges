/**
 * 우선 주어진 배열은 문자열 배열이다.
 *
 * 또한 const이기 때문에 readonly속성도 가지고 있다.
 *
 *
 *
 */

type TupleToObject<T extends readonly string[]> = {
  [k in T[number]]: k
}
