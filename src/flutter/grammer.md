---
cover: /assets/images/cover2.jpg
date: 2024-06-01
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

## **运算符**

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

## **循环**

``` dart
++ --  for  while  do...while  break continue
```

``` dart
/** List常用方法 */ 
// 常用属性
length       长度
reversed     翻转 需要配合toList转换为数组
isEmpty      是否为空
isNotEmpty   是否不为空

// 常用方法
add          增加
addAll       拼接数组  传入具体值
remove       删除  传入具体值
removeAt     删除  传入索引值
fillRange    修改
insert(index, value)    指定位置插入
insertAll(index, list)  指定位置插入List
toList()     其他类型转换成List
join()       List转换成字符串
split()      字符串转List
forEach()    
map()
where
any
every
```

### Set数据类型

```dart
// 常用于去重
var s = new Set()


```

## 映射(Maps)是无序的键值对

### 常用属性

``` dart

keys        获取所有的key值   需要配合toList()
values      获取所有的value值
isEmpty     是否为空
isNotEmpty  是否不为空
```

### 常用方法

```dart

remove(key)     删除指定Key的数据 
addAll({})      合并映射  给映射内增加属性
containsValue   查看映射内的值  返回true/false
forEach         遍历数组
map             遍历操作数组
where           数组中满足条件的数据
any             判断数组中是否存在满足条件的数据
every           判断数组中是否每个元素都满足条件

```

## 自定义方法

### 普通方法

``` dart
// 格式：
返回类型  方法名称(属性1,...){
    方法体
    return 返回值;
}

```

### 可选参数

``` dart
返回类型  方法名称( 类型 属性1, ... , [ 类型 属性2 ]){
    方法体
    return 返回值;
}

```

### 默认参数

```dart
返回类型  方法名称( 类型 属性1, ... , [ 类型 属性 = 属性默认值 ]){
    方法体
    return 返回值;
}
```

### 命名参数

```dart
// 方法定义
返回类型  方法名称( 类型 属性1, ... , { 类型 属性8 = 属性默认值 }){
    方法体
    return 返回值;
}

// 方法调用
方法名称(属性1值, 属性8:属性8值 )

```

### 方法传递

```dart

fn1() {
    print('fn1')
}

fn2(fn) {
    fn();
}

// 调用
fn2(fn1)

```
