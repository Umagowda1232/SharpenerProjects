// const product = (a, b) => a * b;
// console.log(product(3, 4));

const student = {
    name: 'Uma',
    roll_no: 13,
    // greet: () => {
    //     console.log('Hi, I am', this.name);
    // }  this will give undefined because this keyword is global scoped

    // greet() {
    //     console.log('Hi, I am', this.name);
    // }  This will work FINE

    greet: function () {
        console.log('Hi, I am', this.name);
    }
    // This also works FINE
};

student.greet();


