function hello(){
    console.log("Hello Akarsh");

    var car ={
        carName : "i20",
        carCompany : "Hyundai",
        carDetails : function() {
            return this.carCompany + " " + this.carName;
        }
    }

    console.log(car.carDetails());

    var human = this;
    console.log(human);

    function func(){
        return this;
    }

    console.log(func());

    var title = "A Passage to India";
    var novel = {
        title : "Pride of India",
        print : function() {
            return this.title;
        }
    }

    console.log(novel.print());

    var person = {
        firstName : "Akarsh",
        lastName : "Jaiswal",
        fullName : function(){
            console.log("Hello Akarsh");
            return this.firstName + " " + this.lastName;
        }
    }

    // console.log(person.fullName());

    setTimeout(person.fullName,5000);

    function domID(){
        document.getElementById("header").innerHTML = "Hello Akarsh";
    }

    setTimeout(domID,3000);

    document.getElementsByClassName("para")[0].innerHTML = "Java works on every machine";

    document.getElementsByTagName("p")[0].innerHTML = "Python works on every machine";

    




    console.log("Hi")

}

hello();
