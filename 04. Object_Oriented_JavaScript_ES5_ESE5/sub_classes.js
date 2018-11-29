class Person{
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
    greeting() {
      return `Hey there ${this.firstName} ${this.lastName}`;
    }
  
}

class Customer extends Person{
  constructor(firstName, lastName, phone, membership){
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost(){
    return 500;
  }

}

// Instantiate the Person class
const mary = new Person('Mary', 'Williams');

// Instantiate the Customer class
const john = new Customer('John', 'Smith', '555-555-5555', 'Standard');

// console.log(mary.greeting());
console.log(john.greeting());

console.log(Customer.getMembershipCost());


