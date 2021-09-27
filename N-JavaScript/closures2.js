function f1() {
    let a = 100;
    function f2() {
        let b = "naveen";
        function f3() {
            console.log(b);
        }
       f3()   
    }
    f2();
}
f1()
