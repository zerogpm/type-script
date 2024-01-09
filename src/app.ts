class Department {
    name:string;
    constructor(n: string) {
        this.name = n;
    }
    
    describute() {
        console.log(`we are ${this.name} department`);
    }
}

let some = new Department("accouting");
some.describute();