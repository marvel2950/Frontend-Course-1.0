function onClick(){
    // alert("Clicked !");
    console.log("Hello World !");
    document.getElementById('text1').innerHTML = "Hi Akarsh";
    console.log("changed the paragraph tag content");
}

function hello(){
    var a = 5; //Number
    var b = 10;
    var c = a+b;
    console.log(c);

    var name = "Akarsh"; //String
    var flag = true; //Boolean

    var x = 4;
    var y = 0;
    console.log(x/y); //Infinity

    var xx = 4;
    var yy = "Akarsh";
    console.log(xx/yy); //NaN

    console.log(typeof 4);
    console.log(typeof "Apple");
    console.log(typeof true);

    var l;
    console.log(l); //undefined

    var k = null;
    console.log(k); //null

    var name = "";
    console.log(typeof name);
    console.log(name);

    var u = 14.89;
    console.log(typeof u); //number

    console.log(4!="4");
    console.log(4!=="4");

    console.log(4=="4");
    console.log(4==="4");

    console.log(5>6);
    console.log(5<6);
}