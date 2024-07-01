void main(){

  /* 使用forEach打印List中的数据 */
  List<int> list = [1, 2, 3, 4, 5];
  // list.forEach((int item) =>  print(item));

  /** 大于二的值乘2 */
  List vokeArr = list.map((int item) => item > 2 ? item * 2 : item).toList();
  // List list2 = vokeArr.toList();
  print(vokeArr);
}