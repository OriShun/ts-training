/**
 * @problem 13 - ReadOnly
 * * 【学んだこと】
 * - [key in K] と [key in keyof K]になるときの違い
 * - Pickの問題ではジェネリクスで<K extends keyof T>としていたため [key in K]でよかった
 * - 今回はただのオブジェクトTなので [key in keyof T]とする必要がある
 */

/* _____________ あなたのコード _____________ */
type MyReadonly<T> = { readonly [key in keyof T]: T[key] };

/* _____________ テストケース _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>];

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}
