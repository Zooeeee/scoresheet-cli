var Student = function(arr){
    this.arr = arr;
    this.name = arr[0];
    this.id = arr[1];
    this.nation = arr[2];
    this.klass = arr[3];
    this.math = parseFloat(arr[4]);
    this.chinese = parseFloat(arr[5]);
    this.english = parseFloat(arr[6]);
    this.programe =parseFloat(arr[7]);
    this.total_points = parseFloat(this.math+this.chinese+this.english+this.programe) ;
    this.average =  parseFloat(this.total_points/4);
    this.display_scores = function(){
    // 张三|75|95|80|80|82.5|330
    var result = this.name+'|'+this.math+'|'+this.chinese+'|'+this.english+'|'+this.programe+'|'+this.average+'|'+this.total_points;
    return result;
    }
    //张三 学号 民族 班级 数学 语文 英语 程序
    this.check = function(){
        if(arr.length == 8)
            result1 = true
        else 
            result1 = false
        result1 = result1 && test_str(this.arr[0]) && test_str(this.arr[2])
        result1 = result1 && test_score(arr[1],99) && test_score(arr[3],10)
        result1 = result1 && test_score(arr[4],100)&& test_score(arr[5],100)&& test_score(arr[6],100)&& test_score(arr[7],100)
        return result1
        
    }
    function test_str(a){
        if (typeof(a) == "string")
            return true
        else 
            return false
    }
    function test_score(num,max){
        if(num<=max && num>=0)
            return true
        else 
            return false
    }

}
module.exports = Student;