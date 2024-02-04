---
title: 行列式的计算
---

# 行列式求值 Science.Mathm.Det.value()
例子:
``` javascript
const Science=require("../Science");
console.log(new Science.Mathm.Det([[3,1,-1,2],[-5,1,3,-4],[2,0,1,-1],[1,-5,3,-3]]).value());
```
:::waring
Science.Mathm.Det.value() 目前在极端数据下存在求值误差问题，后期修复。
:::

# 行列式转置 Science.Mathm.Det.value(way)
例子:
```javascript
const Science=require("../Science");
console.log(new Science.Mathm.Det([[3,1,-1,2],[-5,1,3,-4],[2,0,1,-1],[1,-5,3,-3]]).totriangle().arr);
```
其中，参数`way`代表转置方式，默认值为0，代表下三角；如果取值为1，则代表上三角。
代码输出:
```
[
  [ 3, 1, -1, 2 ],
  [
    Fraction {
      numerator: 0,
      denominator: 1,
      type: 'Fraction',
      value: 0
    },
    Fraction {
      numerator: 8,
      denominator: 3,
      type: 'Fraction',
      value: 2.6666666666666665
    },
    Fraction {
      numerator: 4,
      denominator: 3,
      type: 'Fraction',
      value: 1.3333333333333333
    },
    Fraction {
      numerator: -2,
      denominator: 3,
      type: 'Fraction',
      value: -0.6666666666666666
    }
  ],
  [
    Fraction {
      numerator: 0,
      denominator: 1,
      type: 'Fraction',
      value: 0
    },
    Fraction {
      numerator: 0,
      denominator: 1,
      type: 'Fraction',
      value: 0
    },
    Fraction {
      numerator: 2,
      denominator: 1,
      type: 'Fraction',
      value: 2
    },
    Fraction {
      numerator: 5,
      denominator: -2,
      type: 'Fraction',
      value: -2.5
    }
  ],
  [
    Fraction {
      numerator: 0,
      denominator: 1,
      type: 'Fraction',
      value: 0
    },
    Fraction {
      numerator: -0,
      denominator: 1,
      type: 'Fraction',
      value: -0
    },
    Fraction {
      numerator: 0,
      denominator: 1,
      type: 'Fraction',
      value: 0
    },
    Fraction {
      numerator: 5,
      denominator: 2,
      type: 'Fraction',
      value: 2.5
    }
  ]
]
```
输出说明:
`Fraction`是分数类型，后面会介绍到。其次，这段代码只取了`arr`部分，所以不是`Tree`形式