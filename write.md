# 编写规范

## js规范：

### 一、文件：
1，文件名称只能用小写，如果有分隔用.号分隔

### 二、变量命名：
1，普通变量名和函数名采用"小驼峰式命名法"， 如：firstName、lastName
2，作为构造函数的函数采用"大驼峰式命名法"， 如：
  var Person = function(){
      //..
  }

  var me = new Person();

### 三、分号：

每条语句后面跟上分号

### 四、大括号：

1，if语句、函数定义、try语句等带大括号的结构：
2，除了一句if语句，其他的都要加上大括号。
比如：if(true) return true;
3，标准写法：
var func = function (container, options) {

}
注意上面的空格

### 五、空格：
1，数值操作符(如, +/-/*/% 等)、比较符（大于、小于、等于）两边留空格；
2，逗号、冒号、分号后要留一个空格（如果后面还有内容的话）；
3，行尾不要有空格;
4，点号前后不要出现空格。

### 六、字符串
1，所有的js代码的字符串都使用单引号
比如：var a = '考拉是条狗';
     var html = '<div class="abc"></div>';
2，如果在html文件（.vm扩展名）里面则使用双引号""

### 七、for循环写法：
for (var i = 0, len = arr.length; i < len; i++) {
}

### 八、注释：

1，公共的函数，要在函数的开头详细描述。
/**
 * 函数整体描述
 * @param param1 第一个参数描述
 * @param paramn 第n个参数描述
 */

2，行代码，如果需要描述的，加个行注释即可
// 这是一段牛逼的代码，不写注释不是我的风格

3，TODO注释类型，来表示当时未完成或者存在隐患的代码，供以后自己或他人注意


## css规范
### 一、文件
文件命名用小写，用.（点号）分隔

### 二、类名
1，类的命名都用小写，用-（中划线）分隔
2，命名最好描述性比较强，不知道最好有道翻译下

### 三、id名
1，id命名都用小写，用_（下划线）分隔
2，命名最好描述性比较强，不知道最好有道翻译下

### 四、选择器
1，选择器最好不要超过3级
   比如：.a .b .c .d{}这个请避免
2，选择器最好不要用标签选择器，最好给要加样式的标签加个类
   除了reset.css用标签以外，这种最好避免：.a p {},最好给p一个class，.a .p {}

### 五、样式写法：
1，样式分行写，不要写在一行里面