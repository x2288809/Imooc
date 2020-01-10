
## 流程控制语句

1. if...else 语句

if...else语句是在指定的条件成立时执行代码，在条件不成立时执行else后的代码。

if(条件)
{ 条件成立时执行的代码}
else
{条件不成立时执行的代码}

2. Switch 语句

Switch必须赋初始值，值与每个case值匹配。满足执行该 case 后的所有语句，并用break语句来阻止运行下一个case。如所有case值都不匹配，执行default后的语句。

switch(表达式)
{
case 值1:
  执行代码块 1
  break;
case 值2:
  执行代码块 2
  break;
...
case 值n:
  执行代码块 n
  break;
default:
  与 case值1 、 case值2...case值n 不同时执行的代码
}

3. for 循环

for(初始化变量;循环条件;循环迭代)
{     
    循环语句 
}

4. while 循环

while(判断条件)
{
    循环语句
}

5. do while 循环

do while结构的基本原理和while结构是基本相同的，但是它保证循环体至少被执行一次。因为它是先执行代码，后判断条件，如果条件为真，继续循环。

do
{
    循环语句
 }
while(判断条件)

6. break 退出循环
for(初始条件;判断条件;循环后条件值更新)
{
  if(特殊情况)
  {
    break;
  }
  循环代码
}

7. continue 跳过本次循环，继续循环
for(初始条件;判断条件;循环后条件值更新)
{
  if(特殊情况)
  { 
    continue; 
  }
 循环代码
}

## 函数

function 函数名(参数1,参数2...)
{
   var  sum,参数1,参数2...;
   函数代码；
   return sum; //返回函数值,return后面的值叫做返回值。
}

sum = 函数名(参数1,参数2...);

## JS中的事件

- 鼠标经过事件 onmouseover 
- 鼠标单击事件 onclick
- 鼠标移开事件 onmouseout
- 光标聚焦事件 onfocus

当网页中的对象获得聚点时，执行onfocus调用的程序就会被执行。

- 失焦事件 onblur

onblur事件与onfocus是相对事件，当光标离开当前获得聚焦对象的时候，触发onblur事件，同时执行被调用的程序。

- 内容选中事件 onselect

选中事件，当文本框或者文本域中的文字被选中时，触发onselect事件，同时调用的程序就会被执行。

- 文本框内容改变事件 onchange

通过改变文本框的内容来触发onchange事件，同时执行被调用的程序。

- 加载事件 onload

事件会在页面加载完成后，立即发生，同时执行被调用的程序。

注意：
-- 加载页面时，触发onload事件，事件写在<body>标签内。
-- 此节的加载页面，可理解为打开一个新页面时。

- 卸载事件 onunload

当用户退出页面时（页面关闭、页面刷新等），触发onUnload事件，同时执行被调用的程序。

注意：不同浏览器对onunload事件支持不同。


