
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

## JavaScript内置对象

1. 什么是对象

- 访问对象属性的语法:
    objectName.propertyName

- 如使用 Array 对象的 length 属性来获得数组的长度：
```
var myarray=new Array(6);//定义数组对象
var myl=myarray.length;//访问数组长度length属性
```
2. Date 日期对象

- 定义一个时间对象 :

    var Udate=new Date(); 

    注意:使用关键字new，Date()的首字母必须大写

- Date对象中处理时间和日期的常用方法：
    get/setDate()               返回/设置日期
    get/setFullYear()           返回/设置年份，用四位数表示
    get/setYear()               返回/设置年份
    get/setMonth()              返回/设置月份（从0开始，11即十二月）
    get/setHours()              返回/设置小时，24小时制
    get/setMinutes()            返回/设置分钟数
    get/setSeconds()            返回/设置秒钟数
    get/setTime()               返回/设置时间（毫秒为单位）
    get/setDay()                返回/设置星期
 
- 例如：
```
var mydate = new Date();//当前时间2014年3月6日
document.write(mydate+"<br>");//输出当前时间
document.write(mydate.getFullYear()+"<br>");//输出当前年份
mydate.setFullYear(81); //设置年份
document.write(mydate+"<br>"); //输出年份被设定为 0081年。
```
3. String 字符串对象

- 访问字符串对象的属性length:
    
    stringObject.length; 返回该字符串的长度。

- 访问字符串对象的方法：

    使用 String 对象的 toUpperCase() 方法来将字符串小写字母转换为大写：
```
var mystr="Hello world!";
var mynum=mystr.toUpperCase();
```
    以上代码执行后，mynum 的值是：HELLO WORLD!

    toLowerCase() 将字符串小写字母转换为大写
    toUpperCase() 将字符串大写字母转换为小写

4. 返回指定位置的字符

charAt() 方法可返回指定位置的字符。返回的字符是长度为 1 的字符串。

- 语法：
    
    stringObject.charAt(index)

    index 表示字符串中某个位置的数字，即字符在字符串中的下标

- 注意：
    1.字符串中第一个字符的下标是 0。最后一个字符的下标为字符串长度减一（string.length-1）。

    2.如果参数 index 不在 0 与 string.length-1 之间，该方法将返回一个空字符串。

5. 返回指定的字符串首次出现的位置

indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
- 语法
    stringObject.indexOf(substring, startpos)

- 参数说明：
    substring   必填参数。规定需要检索的字符串值。
    startpos    可选的整数参数。规定在字符串中开始检索的位置。它的合法取值是0到stringObject.lengh -1 。如省略该参数，则将从字符串的首字符开始检索。

- 说明：
    1.该方法将从头到尾地检索字符串 stringObject，看它是否含有子串 substring。

    2.可选参数，从stringObject的startpos位置开始查找substring，如果没有此参数将从stringObject的开始位置查找。

    3.如果找到一个 substring，则返回 substring 的第一次出现的位置。stringObject 中的字符位置是从 0 开始的。

- 注意：
    1.indexOf() 方法区分大小写。

    2.如果要检索的字符串值没有出现，则该方法返回 -1。

6. 字符串分割split()

split() 方法将字符串分割为字符串数组，并返回此数组。

- 语法：
    stringObject.split(separator,limit)

- 参数说明:
    separator   必填参数。从该参数指定的地方分割stringObject。
    limit       可选参数，分割的次数，如设置该参数，返回的子串不会多余这个参数指定的数组，如果无此参数为不限制次数。

- 注意：
    如果把空字符串 ("") 用作 separator，那么 stringObject 中的每个字符之间都会被分割。

- 使用指定符号分割字符串，代码如下:
```
var mystr = "www.imooc.com";
document.write(mystr.split(".")+"<br>");
document.write(mystr.split(".", 2)+"<br>"); 
```
- 运行结果:
```
www,imooc,com
www,imooc
```

7. 提取字符串substring()

substring() 方法用于提取字符串中介于两个指定下标之间的字符。

- 语法:

    stringObject.substring(startPos,stopPos) 

- 参数说明:
    starPos     必填参数。一个非负的整数，开始位置。
    stopPos     选填参数。一个非负的整数，结束位置，如果省略该参数，那么返回的子串会一直到字符串对象的结尾。    

- 注意：
    1. 返回的内容是从 start开始(包含start位置的字符)到 stop-1 处的所有字符，其长度为 stop 减start。

    2. 如果参数 start 与 stop 相等，那么该方法返回的就是一个空串（即长度为 0 的 字符串）。

    3. 如果 start 比 stop 大，那么该方法在提取子串之前会先交换这两个参数。

- 使用 substring() 从字符串中提取字符串，代码如下：

```
<script type="text/javascript">
  var mystr="I love JavaScript";
  document.write(mystr.substring(7));
  document.write(mystr.substring(2,6));
</script>
```

- 运行结果
```
JavaScript
love
```

8. 提取指定数目的字符substr()

substr() 方法从字符串中提取从 startPos位置开始的指定数目的字符串。

- 语法:
    stringObject.substr(startPos,length)

- 参数说明：
    starPos     必填参数。要提取的字串的起始位置。必须是数值。
    length      选填参数。提取字符串的长度。如果省略，返回从stringObject的开始位置starPos到stringObject的结尾的字符。

- 注意：
    如果参数startPos是负数，从字符串的尾部开始算起的位置。也就是说，-1 指字符串中最后一个字符，-2 指倒数第二个字符，以此类推。

    如果startPos为负数且绝对值大于字符串长度，startPos为0。

9. Math对象

Math对象，提供对数据的数学计算。

- 注意：
    Math 对象是一个固有的对象，无需创建它，直接把 Math 作为对象使用就可以调用其所有属性和方法。这是它与Date,String对象的区别。

- Math 对象属性
    E           返回算术常量e，即自然对数的底数（约等于2.718）
    LN2         返回2的自然对数（约等于0.93）
    LN10        返回10的自然对数（约等于2.302）
    LOG2E       返回以2为底的e的对数（约等于1.442）
    LOG10E      返回以10为底的e的对数（约等于0.434）
    PI          返回圆周率（约等于3.1415926）
    SQRT1_2     返回2的平方根的倒数（约等于0.707）
    SQRT2       返回2的平方根（约等于1.414）

- Math 对象的方法
    abs(x)      返回数的绝对值
    acos(x)     返回数的反余弦值
    asin(x)     返回数的反正弦值
    atan(x)     返回数的反正切值
    atan2(y,x)  返回由x轴到点（x,y）的角度（以弧度为单位）
    ceil(x)     对数进行上舍入
    cos(x)      返回数的余弦
    exp(x)      返回e的指数
    floor       对数进行下舍入
    log(x)      返回数的自然对数（底为e）
    max(x,y)    返回x和y中的最大值
    min(x,y)    返回x和y中的最小值
    pow(x,y)    返回x的y次幂
    random()    返回0到1之间的随机数
    round(x)    把数四舍五入为最近的整数
    sin(x)      返回数的正弦
    sqrt(x)     返回数的平方根
    tan(x)      返回数的正切
    toSource()  返回该对象的源代码
    valueOf()   返回Math对象的原始值

10. Array 数组对象

数组对象是一个对象的集合，里边的对象可以是不同类型的。数组的每一个成员对象都有一个“下标”，用来表示它在数组中的位置，是从零开始的

- 数组定义的方法：

    1. 定义了一个空数组:

    var  数组名= new Array();
    2. 定义时指定有n个空元素的数组：

    var 数组名 =new Array(n);
    3. 定义数组的时候，直接初始化数据：

    var  数组名 = [<元素1>, <元素2>, <元素3>...];

我们定义myArray数组，并赋值，代码如下：

```var myArray = [2, 8, 6];``` 

- 数组属性：

    length 用法：
    ```<数组对象>.length；```
    返回：数组的长度，即数组里有多少个元素。它等于数组里最后一个元素的下标加一。

- 数组方法：

    concat()            连接两个或更多的数组，并返回结果
    join()              把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分割        
    pop()               删除并返回数组的最后一个元素
    push()              向数组的末尾添加一个或更多元素，并返回新的长度
    reverse()           颠倒数组中元素的顺序
    shift()             删除并返回数组的第一个元素
    slice(x,y)          从某个已有的数组返回选定的元素，返回一个新的数组，包含从x到y（不包括该元素）的 arrayObject 中的元素，不会修改原来的数组
    sort()              对数组的元素进行排序，（）中填方法函数
    splice()            删除元素，并向数组添加新元素
    toSoure()           返回该对象的源代码
    toString()          把数据转换为字符串，并返回结果
    toLocaleString()    把数组转换为本地数组，并返回结果
    unshift()           向数组的开头添加一个或更多元素，并返回新的长度
    valueOf()           返回数组对象的原始值

## 浏览器对象

1. window对象

window对象是BOM的核心，window对象指当前的浏览器窗口。

- window对象方法:

    alret()             显示带有一段消息和一个确认按钮的警告框    
    prompt()            显示可提示用户输入的对话框  
    confirm()           显示带有一段消息以及确认按钮和去取消按    钮的对话框
    open()              打开一个新的浏览器窗口或查找一个已命名    的窗口
    close()             关闭浏览器窗口
    print()             打印当前窗口的内容
    focus()             把键盘焦点给与一个窗口
    blur()              把键盘焦点从顶层窗口移开    
    moveBy()            可相对窗口的当前坐标把它移动指定的像素    
    moveTo()            把窗口的左上角移动到一个指定的坐标  
    resizeBy()          按照指定的像素调整窗口的大小    
    resizeTo()          把窗口的大小调整到指定的宽度和高度  
    scrollBy()          按照指定的像素值来滚动内容  
    scrollTo()          把内容滚动到指定的坐标
    setInterval()       每隔指定的时间执行代码
    setTimeout()        在指定的延迟时间之后来执行代码
    clearIntervaal()    取消setInterval()的设置
    clearTimeout()      取消setTimeout()的设置

2. JavaScript 计时器

在JavaScript中，我们可以在设定的时间间隔之后来执行代码，而不是在函数被调用后立即执行。

- 计时器类型：
    一次性计时器：仅在指定的延迟时间之后触发一次。
    间隔性触发计时器：每隔一定的时间间隔就触发一次。

- 计时器方法：
    setTimeout()        指定的延迟时间之后来执行代码
    clearTimeout()      取消setTimeout()的设置
    setInterval()       每隔指定的时间执行代码
    clearInterval()     取消setInterval()的设置