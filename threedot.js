const ages1=[32,53,45];
const ages2=[43,64,54];
const ages3=[45,67,35];
const allAges=ages1.concat(ages2).concat([6]).concat(ages3);
// three dot magic
const allAges2=[...ages1,...ages2,...ages3];
console.log(allAges2)
// console.log(allAges)
// how i am show maximum number
const doctor=343;
const teacher=344;
const baristar=544;
// const maximum=Math.max(doctor,teacher,baristar);
// console.log(maximum)
// how i am show maximu number in spread oparator or three dots
const takaPoisa=[433,454,545];
const maximum=Math.max(...takaPoisa);
console.log(maximum)