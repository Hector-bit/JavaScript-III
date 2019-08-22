/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: allows for you to access a variable outside the scope of a function by putting the variable in as a parameter 

* 2. Implicit binding: references whatever is to the left of the dot

* 3. New binding: 

* 4. Explicit Binding: when .call or something similar along with .that is used to invoke a function
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

var vet = function(){
    console.log(`the name of your dog is ${this.name}`)
  };
  
  var pet = {
    name: 'Duke'
  };
  
  vet.call(pet);

// Principle 2
// code example for Implicit Binding

let person = {
    name: 'John',
    age: 25,
    location: 'Vermont MI',
    meet: function(){
        console.log(`Hi, I am ${this.name}, I am ${this.age}, and I live in ${this.location}`);
    }
};

person.meet();

// Principle 3
// code example for New Binding: can be used to create new objects using pre-existing functions

let people = function(name, age, location){
    this.name =  name;
    this.age = age;
    this.location = location;
};

var Johnney = new people(Johnney, 9, Seattle);

// Principle 4
// code example for Explicit Binding

let meetperson = {
    meet: function(){
        console.log(`Hi, I am ${this.name}, I am ${this.age}, and I live in ${this.location}`);
    }
};

let person = {
    name: 'John',
    age: 25,
    location: 'Vermont MI',
};

meetperson.call(person);