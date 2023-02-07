const person={
    name:"kauser hossain",
    schoolName:"gouripur Rk govt high school",
    gender:"male",
    fatherName:"abdus salam",
    motherName:"khudaja begum",  
}
const {name}=person;
const{motherName}=person
// const name=person.name;
// const gender=person.gender;
// console.log(name,motherName)
// array distructure
const friendsName=["sakib al hasan","junayed ahamed","sagir ali","hridoy","sohag"];
const [sakib,...remain]=friendsName;
// console.log(sakib,remain)
const complexObject={
    name:"akbor",
    info:{
        adress:"ramgopalpur",
        chairmanName:"jony mia",
    }
}
const {adress}=complexObject.info;
console.log(adress)