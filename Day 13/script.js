function hello(){
    console.log("Hello Akarsh");

    var students = ["Rajesh","Sheldon","Leonard","Howard"];
    console.log(students);

    console.log(students[0]);
    console.log(students[3]);

    students[3] = "Penny";
    console.log(students);

    console.log(students.length);
    console.log(students[students.length-1]);

    students.push("Amy");
    console.log(students);

    students[5] = "Howard";
    console.log(students);

    // students[10] = "Burnedette";
    // console.log(students);

    // console.log(students[7]);

    students.pop();
    students.pop();
    console.log(students);

    console.log(students.toString());
    console.log(students.join("--"))

    delete students[0];
    console.log(students);
    console.log(students[0]);
    console.log(students.length);

    console.log(students.slice(1,3));

    var arr = ["Mountains","Sea","Island","Forest","Cave"];
    console.log(arr.slice(2,arr.length));
    console.log(arr.slice(2));


    var car = {
        name:"Mercedes",
        model:"GWagon",
        color:"black"
    }

    console.log(car);

    var human = {
        firstName:"Akarsh",
        lastName:"Jaiswal",
        age:10,
        getFullName: function(){
            return this.firstName+" "+this.lastName;
        }
    }

    console.log(human);

    console.log(human.firstName);
    console.log(human["firstName"]);
    console.log(human.getFullName());

    var person = {
        firstName:"Akarsh",
        lastName:"Jaiswal",
        age:10,
        getFullName: function(){
            return this.firstName+" "+this.lastName;
        },
        address:{
            tower:"B3",
            flat:"205",
            society:"Panchsheel"
        }
    }

    console.log(person.address);
    console.log(person.address.society);

    person.username = "whoakarsh";
    person["height"] = 173;

    person.age = 80;

    console.log(person);

    var a = [1,2,3];
    var b = a;

    b[0] = 88;
    a[2] = 97;
    console.log(a);
    console.log(b);

    console.log(add(6,7));
    console.log(add(9,70));
    console.log(add(600,700));



    

}

hello();

function add(x,y){
    return x+y;
}