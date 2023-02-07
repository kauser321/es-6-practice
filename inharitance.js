class Parent{
    constructor(){
        this.fatherName="Abdus Salam";
    }
}
class Child extends Parent {
    constructor(name) {
        super();
        this.name = name;
    }
    getFullName(){
        return this.name+ " "+ this.fatherName;
    }
}
const Child1 = new Child("kader kibria");
const Child2=new Child("Khasru mia");
console.log(Child1.getFullName(),Child1.getFullName())
