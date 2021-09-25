var a = 100;
function b() {
    c();
    function c() {
        console.log(a);
    }
}
b();
