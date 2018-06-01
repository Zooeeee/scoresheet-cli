const Student = require("../lib/student")
var student_id_list = new Array;
var student_list = new Array;
function main(){
    main_menu();
   
}
//主菜单
function main_menu(){
console.log( `1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`)
    var query=require('cli-interact').getNumber;
    var choice = query('请输入你的选择\n>', true);     // restrict to integer
    if(choice == 1)
    add_student();
    else if (choice == 2 )
    score_list();
    else if(choice == 3 )
    console.log("\n结束");
    return false;
}

//添加学生信息
function add_student(){
    //zhangsan 1 han 5 11 22 33 44
    //lisi 2 han 5 44 33 22 11
    //wangwu 3 han 5 11 33 22 44 
   var query=require('cli-interact').question;
   var data = query('请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科成绩: 数学、语文、英语、编程。），按回车提交：\n> ');
   data = data.split(" ");
   var student = new Student(data);
   if(student.check() === false)
       add_student()
   else 
       console.log("学生"+student.name+"的成绩被添加\n");
       student_list.push(student);
       student_id_list.push(student.id);
       main_menu(); 
}


//显示学生成绩 
function score_list(){
    var averages = 0
    var query=require('cli-interact').question;
    var inputs = query("\n请输入你要查询的学号\n>");
    inputs = inputs.split(" ");
    var result = "";
    var total_scores_arr = new Array; 
    //console.log(one_student_scores(inputs));
    
    function id_to_order(str){
        return student_id_list.indexOf(str);
    }
    function one_student_scores(arr){
         i = 1;
         var result = student_list[id_to_order(arr[0])].display_scores();
         total_scores_arr.push(student_list[id_to_order(arr[0])].total_points);
         var averages = student_list[id_to_order(arr[0])].average;
         if(arr.length != 1)
         for(var i = 1 ; i < arr.length ; i++){
         result = result + "\n" + student_list[id_to_order(arr[i])].display_scores();
         averages += student_list[id_to_order(arr[i])].average;
         total_scores_arr.push(student_list[id_to_order(arr[i])].total_points);}
         averages = averages/i;
         var a = new Array(2)
         a[0] = result;
         a[1] = averages;
         return a;
    }
    result = `成绩单`+`\n`+
    `姓名|数学|语文|英语|编程|平均分|总分`+`\n`+
    `========================\n`+
    one_student_scores(inputs)[0]
    +`\n========================\n`+
    `全班总分平均数：`+one_student_scores(inputs)[1]+`\n`+
    `全班总分中位数：`+compute_median(total_scores_arr)+`\n`;
    console.log(result);
    main_menu();
    }
   
//中位数
function compute_median(collection) {
    //计算中位数
    var ary = collection.sort(function (a,b) {
        return a - b;
    });
    if(ary.length%2 == 0){
        var lowMiddle = Math.floor((ary.length - 1) / 2);
        var highMiddle = Math.ceil((ary.length - 1) / 2);
        return (ary[lowMiddle]+ ary[highMiddle]) / 2;
    }
    if(ary.length%2!=0){
        var Middle = ((ary.length - 1) / 2);
        return (ary[Middle]);
    }
}


module.exports = main ;