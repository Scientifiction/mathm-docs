---
title: 关于虚数I
---

# 关于虚数
在数学中，虚数就是形如a+b×i的数，其中a，b是实数，且b≠0，i² = - 1。虚数这个名词是17世纪著名数学家笛卡尔创立，因为当时的观念认为这是真实不存在的数字。后来发现虚数 `a+b×i` 的实部`a` 可对应平面上的横轴，虚部b可对应平面上的纵轴，这样虚数 `a+b×i` 可与平面内的点 `(a,b)` 对应。
可以将虚数 `bi` 添加到实数 `a` 以形成形式 `a + b×i` 的复数，其中实数 `a` 和 `b` 分别被称为复数的实部和虚部。

# Mathm中的虚数
## 创建一个虚数
```javascript
const Science = require("../Science"); //导入Science包
var a = new Science.Mathm.I(0.1,0.8); //new 创建一个虚数
console.log(a)
```
## Mathm 的虚数表示法
``` 
I { real: 0.1, imaginary: 0.8, type: 'I' }
```
以上是创建虚数代码的执行结果，其中 `real` 表示这个虚数的实部，`imaginary`表示虚部，`type`表示类型。

