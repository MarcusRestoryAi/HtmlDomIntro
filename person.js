class Person{

    constructor(name){
        this.name = name;
    }

    getName() {
        return this.name;
    }

    toString() {
        return `<p>${this.name}</p>`;
    }

}