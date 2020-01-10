function icoomWriter() {
    document.write("系好安全带,准备启航--目标JS");
}

function icoomT() {
    alert("准备好了，起航吧！"); //弹窗
}

//方法调用
function icoomOnclick() {
    icoomWriter();
    icoomT();
}

//二维数组练习
function arrayTow() {
    var a = 3;
    var b = 6;
    var myarr = new Array(); //先声明一维 
    for (var i = 0; i <= a; i++) { //一维长度为2
        myarr[i] = new Array(); //再声明二维 
        for (var j = 0; j <= b; j++) { //二维长度为3
            myarr[i][j] = i + j; // 赋值，每个数组元素的值为i+j
        }
    }

    myarr[a][b] = a * b;

    document.write(myarr[a][b]);
}

//输出递增数量的*号
function arrAdd() {
    //创建数组
    var arr = ['*', '##', "***", "&&", "****", "##*"];
    arr[7] = "**";
    //显示数组长度
    document.write(arr.length + "<br/>");

    //将数组内容输出，完成达到的效果。
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < i + 1; j++) {
            document.write(arr[0]);
        }
        document.write("<br/>");
    }
}

function myContinue() {
    var mynum = new Array(70, 80, 66, 90, 50, 100, 89); //定义数组mynum并赋值
    var i;
    for (i = 0; i < mynum.length; i++) {
        if (mynum[i] < 60) {
            document.write("成绩不及格，不输出！" + "<br>");
            continue;
        }
        document.write("成绩:" + mynum[i] + "及格，输出!" + "<br>");
    }
}

function fourPractice() {
    var _tempArray = new Array();
    _tempArray = [
        ['小A', '女', 21, '大一'],
        ['小B', '男', 23, '大三'],
        ['小C', '男', 24, '大四'],
        ['小D', '女', 21, '大一'],
        ['小E', '女', 22, '大四'],
        ['小F', '男', 21, '大一'],
        ['小G', '女', 22, '大二'],
        ['小H', '女', 20, '大三'],
        ['小I', '女', 20, '大一'],
        ['小J', '男', 20, '大三']
    ];
    for (var i = 0; i < 10; i++) {
        if (_tempArray[i][3] == '大一' && _tempArray[i][1] == '女') {
            document.write(_tempArray[i][0] + "<br/>");
        }
    }
}