const a = 10;
{
    const a = 100;
    console.log(a);   //100
    {
        const a = 1000;
        console.log(a);    //1000
    }
}
console.log(a);     //10

var aa = "nav";
function b() {
    var aa = "naveen";
    console.log(aa);         //naveen
} 
console.log(aa);             //nav

let c = 50;
{
    let c = 500;
    {
        let c = 5000;
        console.log(c);     //5000
    }
    console.log(c);    //500
}
console.log(c);       //50


//var->function scoped
// let & const -> block scoped 