/**
 * Created by Administrator on 2016/6/19.
 */
//typescript 的数据类型
var isBool = true; //布尔类型
var isNum = 666; //number类型
var isStr = 'sajdja'; //字符串类型
var isArr = [1, 3, 6, 7]; // 数组类型的声明方式一
var arr = ['sf', 'ss', '7', '8']; //数组类型声明的方式二
//枚举数据类型 enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Cyan"] = 1] = "Cyan";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var colorName = Color[0];
var c = Color.Blue;
function TellEnum() {
    console.log(colorName);
    console.log(c);
}
TellEnum();
//any 数据类型
var anyting = '任意数据类型';
anyting = 1213;
anyting = [1, 3, 5];
function tellAny() {
    console.log(anyting);
}
tellAny();
//void 数据类型 没有返回值的函数
function VoidSting() {
    return '10';
}
function other() {
}
//# sourceMappingURL=dataType.js.map