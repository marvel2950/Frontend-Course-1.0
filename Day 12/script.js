function hello(){
    // console.log("Hello");

    // console.log(8>6);
    // console.log(99>77);

    // console.log(8>6 && 9>77);

    // console.log(9>7);
    // console.log(9>7 || 6>66);

    // console.log(!true);

    // var a = 5.5;
    // console.log(typeof a);

    // console.log(typeof a.toString());
    // console.log(a.toString());


    // console.log(10+null);
    // console.log("10"+null);
    // console.log("10"+5);
    // console.log("10"-5);
    // console.log("10" * "5");

    // console.log("5"+2+3);
    // console.log(2+3+"5");

    // console.log(5+true);

    var x = 5;

    //conditional statements
    if(x%2==0){
        console.log("even");
    }
    else{
        console.log("odd");
    }


    var marks = 85;

    //else if ladder
    if(marks>90){
        console.log("A");
    }
    else if(marks>80){
        console.log("B");
    }
    else if(marks>70){
        console.log("C");
    }
    else{
        console.log("D");
    }


    for(var i=0;i<5;i++){
        console.log("Akarsh");
    }

    for(var i=0;i<5;i++){
        console.log(i);
    }

    var i = 0;
    while(i<5){
        console.log("Akarsh");

        i++; //i=i+1;
    }

    var i = 0;
    while(i<5){
        console.log(i);

        i++; //i=i+1;
    }
    
}

hello();