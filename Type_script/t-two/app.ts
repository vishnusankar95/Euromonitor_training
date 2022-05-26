// function add(n1 : number | string , n2 : number | string){
//    if(typeof n1 === 'number' && typeof n2 === 'number'){
//         return n1+n2;
//     }else {
//         return n1.toString() + n2.toString()

//     }   
// };

// const number1 =  5;
// const number2 = 10;
// //const printResult = true;

// console.log(add(number1,number2));

// function sendRequest(data: string, cb: (response: any) => void) {
//     // ... sending a request with "data"
//     return cb({data: 'Hi there!'});
//   }
   
//   sendRequest('Send this!', (response) => { 
//     console.log(response);
//     return true;
//    });

// enum Data {ADMIN = "ADMIN" , READ_ONLY = 0 , AUTHOR} //enum 

// const user : {
//     name : string;
//     age : number;
//     hobby : string[];
//     role : [number,string];  // tuples
//     data : {} ;
// } = {
//     name : "vishnu",
//     age : 27,
//     hobby : ['driving','swimming'],
//     role : [1,'se'],
//     data : Data.ADMIN
// }
// console.log("Name : ",user.name);
// console.log("Age : ",user.age)
// for(const hob of user.hobby){
//  console.log("Hobbies : ",hob)
// }
// console.log("Role : ",user.role[0])
// console.log("Data : ",user.data)

//Any

type combinable = string | number;
function add(n1 : combinable , n2 : combinable , resultconversion : 'as-num' | 'as-text'){
   if(typeof n1 === 'number' && typeof n2 === 'number' && resultconversion == 'as-num'){
        return n1+n2;
    }else if(resultconversion == 'as-text'){
        return n1.toString() + n2.toString()
    }  
};

const number1 =  'five';
const number2 = 10;
const result = 'as-text'


console.log(add(number1,number2,result));

//void functions 
// never 
