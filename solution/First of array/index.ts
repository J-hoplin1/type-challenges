/**
 * never 타입 -> 절대 발생할 수 없는 타입을 의미한다
 *
 * never 타입 -> 절대 발생할 수 없는 타입을 의미한다.
 *
 * never 타입은 모든 타입에 할당 가능한 타입이다.
 *
 * 첫번쨰 요소가 없으면 발생할 수 없는 타입이기에 빈 배열인 경우에는 never를 반환하도록 한다.
 *
 */

type FirstOArray<T extends any[]> = T extends [] ? never : T[0]

type arr1 = ["a", "b", "c"]

type head1 = FirstOArray<arr1>
