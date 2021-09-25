function f1(){
    var a = 10;
    
    return function f2() {
        var b = 100;
     
         function f3() {
            console.log(a,b);
            }
        f3();
    }
    f2();
}
f1();
var x = f1();
console.log(x);