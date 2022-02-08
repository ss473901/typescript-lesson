/* eslint-disable */

/**TypeScriptの基本の型 */

// boolean
let bool: boolean = true;

// number　　数値
let num: number = 0;

// string
let str: string = "A";

// Array　　配列 1行目の書き方のがわかりやすい
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

// tuple　※あまり使わない
let tuple: [number, string] = [0, "A"];

// any ※あまり使わない
let any1: any = false;

// void 何も返却値がない ※:voidと書かなくても自動で認知してくれる
const funcA = (): void => {
  const test = "TEST";
};

const funcA = () => {
  const test = "TEST";
};

// null
let null1: null = null;

// undefined
let undefined1: undefined = undefined;

// object ※あまり使わない
let obj1: object = {};
let obj2: { id: number; name: string } = { id: 0, name: "AAA" };
