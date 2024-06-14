---
cover: /assets/images/cover2.jpg
date: 2024-6-13
sticky: true
---

# Flutter 语法

## **注释方法**

方法一： **\/\/** <br/>
方法二： **/\*\* \*/** <br/>
方法三： **\/\/\/** <br/>

## **变量声明**

var  -> 类型推断

```dart
var str = "dart"

// 数字类型
int num = 12345

//

```

## **数据类型**

* int
* double
* String
* bool
* List
* Map

```dart
<!-- 字符串类型： 单引号 双引号 三单引号 三双引号 -->

// 区别：单引号和双引号只能将字符串书写到一行， 三单引号和三双引号可以书写多行字符串
String str1 = '你好，dart'
String str2 = """ 
    可以书写多行字符串
"""

<!-- 数值类型： int double -->

// 1. int 必须为整性
int a = 1; // 错误： int a = 1.1

// 2. double 既可以是整型也可以是浮点型
int b = 1;
int b = 1.1

<!-- 布尔类型 -->
bool flag = true;

<!-- 集合类型 -->

// 方式一： 不指定数据类型 可变长度
var list = ['数据', 1, ture]

// 获取集合方式 .length
list.length

// 获取元素方式 下标
list[0]

// 增加数据 .add
list.add("李四")


// 方式二：强制数据类型 <String>[] 可变长度
var list = ["你好", "dart"]

// 方式三： 创建固定长度集合 List.filled(2, "") 不可变长度
var list = List.filled(2, "");

// 指定集合类型
var list =  List<String>.filled(2,"")


<!-- Map类型 -->
// 定义： 
var map = {
    // 重点：键必须为字符串类型
    "name": 2
}

// 存
map['age'] = 2

// 取
print(map['name'])

```

## 运算符

``` dart
<!-- 算术运算符 -->
+ - * / % ~/(取整)

<!-- 关系运算符 -->
== (等于) != (不等于) > < >= <=

<!-- 逻辑运算符 -->
! (取反)  && (且)  || (或)

<!-- 赋值运算符 -->
// 普通赋值运算
 =  ??= (当变量为空时赋值, 例：b??=100)

// 复杂赋值运算
+= -= *= /= %= ~=

<!-- 条件表达式 -->
// if else switch case

// 三目运算符
? "":""

// ??运算符
例： b = a ?? 10

```

## **类型转换**

``` dart
<!-- Number与String -->
Number -> String   toString()
String -> Number   int.parse(str)

<!-- double与String -->
double -> String  toString( )
String -> double  double.parse()

<!-- 其他类型与bool -->
isEmpty() : 判断字符串

isNaN() : 值为NaN

```

## 循环

``` dart
++ --  for  while  do...while  break continue
```
