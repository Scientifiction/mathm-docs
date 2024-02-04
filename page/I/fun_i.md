---
title: 复数的计算
---
# 复数的加减乘除
## Math.I.add() 复数的加法
示例: `(0.1+0.8i)+(4-2i)`
``` javascript
console.log(new Science.Mathm.I(0.1,0.8).mult(new Science.Mathm.I(4,-2))+"")
```
输出: `2+3i`
## Math.I.bereduced() 复数的减法
示例: `(0.1+0.8i)-(4-2i)`
``` javascript
console.log(new Science.Mathm.I(0.1,0.8).bereduced(new Science.Mathm.I(4,-2))+"")
```
输出: `4.1-1.2i`
## Math.I.mult() 复数的乘法
示例: `(0.1+0.8i)*(4-2i)`
``` javascript
console.log(new Science.Mathm.I(0.1,0.8).mult(new Science.Mathm.I(4,-2))+"")
```
输出: `3.9-2.8i`
## Math.I.bedivide() 复数的除法
示例: `(4-2i)/(0.1+0.8i)`
``` javascript
console.log(new Science.Mathm.I(0.1,0.8).bedivide(new Science.Mathm.I(4,-2))+"")
```
输出: `-0.06000000000000001+0.17i` (后期优化为分数)


# 示例代码
``` javascript
const Science=require("../Science");

console.log(new Science.Mathm.I(0.1,0.8).mult(new Science.Mathm.I(4,-2))+"") //虚数相加
console.log(new Science.Mathm.I(0.1,0.8).add(new Science.Mathm.I(4,-2))+"") //虚数相减
console.log(new Science.Mathm.I(0.1,0.8).bereduced(new Science.Mathm.I(4,-2))+"") //虚数相减
console.log(new Science.Mathm.I(0.1,0.8).divide(new Science.Mathm.I(4,-2))+"") //虚数相减
```

输出
```
2+3i
4.1-1.2i
3.9-2.8i
-0.06000000000000001+0.17i
```