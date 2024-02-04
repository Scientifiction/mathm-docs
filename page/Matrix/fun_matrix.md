---
title: 矩阵的计算
---

# 矩阵的 Hadamard Product Science.Mathm.Matrix.Hadamard(a,b)
其中，`a` 和 `b` 都是 `Matrix` 类型，这段代码计算它们的`hadamard积`
例子:
``` javascript
const Science=require("../Science");
console.log(Science.Mathm.Matrix.Hadamard(new Science.Mathm.Matrix([[1,3,2],[1,0,0],[1,2,2]]),new Science.Mathm.Matrix([[0,0,2],[7,5,0],[2,1,1]])))
```
输出:
```
Matrix {
  arr: [ [ 0, 0, 4 ], [ 7, 0, 0 ], [ 2, 2, 2 ] ],
  m: 3,
  n: 3,
  type: 'Matrix'
}
```
# 矩阵的Kronecker积 Science.Mathm.Matrix.Kronecker(a,b)
例子:
```javascript
const Science=require("../Science");
console.log(Science.Mathm.Matrix.Kronecker(new Science.Mathm.Matrix([[1,2],[3,4],[5,6]]),new Science.Mathm.Matrix([[7,8,9],[10,11,12]])))
```
其中，`a` 和 `b` 都是 `Matrix` 类型，这段代码计算它们的`Kronecker积`
代码输出:
```
Matrix {
  arr: [
    [ 7, 8, 9, 14, 16, 18 ],
    [ 10, 11, 12, 20, 22, 24 ],
    [ 21, 24, 27, 28, 32, 36 ],
    [ 30, 33, 36, 40, 44, 48 ],
    [ 35, 40, 45, 42, 48, 54 ],
    [ 50, 55, 60, 60, 66, 72 ]
  ],
  m: 6,
  n: 6,
  type: 'Matrix'
}
```
输出说明:
`m` 和 `n` 是行列式的长和宽。