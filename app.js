// Oject Constructor
var person = function(firstname,lastname,age){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.yearcalc = function(){
        this.yearofbirth = 2020 - this.age;
    }
}

var kartik = new person("kartik","saxena",19);
console.log('var kartik = new person("kartik","saxena",19); and now printing kartik');
console.log(kartik);

console.log("printing kartik.lastname");
console.log(kartik.lastname);

console.log("printing kartik.yearofbirth ")
console.log(kartik.yearofbirth)

//It wont work because its not initialized and defined yet we need to call yearcalc()

console.log('//It wont work because its not initialized and defined yet we need to call yearcalc()');

console.log("calling kartik.yearcalc()");
kartik.yearcalc();

console.log('now printing kartik.yearof birth');

console.log(kartik.yearofbirth);

// similarly we can also initialize more instances of the Object constructor "Person" .

// Adding methods and properties to prototype....
person.prototype.city="jhansi";
person.prototype.greet=function(){
    console.log("good morning!!");
}

console.log("adding city and greet in the prototype of person...");

console.log(kartik.city);
console.log(kartik.greet());

// using "this" keyword in the prototype method

person.prototype.generateid = function(){
    return (this.lastname+this.yearofbirth);
}

console.log(kartik.generateid());
