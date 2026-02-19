/**
 * @problem 13 - Pick
 * @link https://tsch.js.org/13
 * * 【学んだこと】
 * - [key in K] で K に含まれるKeyという意味
 * - 実務では標準のPickを使うが、仕組みを知ることで複雑なProps設計に役立つ
 */

/* _____________ あなたのコード _____________ */
type MyPick<T, K extends keyof T> = { [key in K]: T[key] }

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyPick<Todo, 'title'>>, { title: string }>,
  Expect<Equal<MyPick<Todo, 'title' | 'completed'>>, { title: string, completed: boolean }>,
  // @ts-expect-error
  type error = MyPick<Todo, 'title' | 'invalid'>,
]

interface Todo {
  title: string
  description: string
  completed: boolean
}