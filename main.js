// let Task1 = (a,b) =>
// {
// if (a<b) return -1;
// else if(a>b)return 1;
// else return 0;
// }
// document.write(`Result = ${Task1(1,5)}<br/>`)
// document.write(`Result = ${Task1(5,1)}<br/>`)
// document.write(`Result = ${Task1(1,1)}<br/>`)

// let Task2 = (a) => {
//     if (a < 0) {return "Invalid";}
//     let factorial = 1;
//         for (let i = a; i > 0; i--)
//         {
//             factorial *= i;
//         }
//     return factorial;
// }
// document.write(`Result = ${Task2(4)}<br/>`);


// let Task3 = (a,b,c)=>
// {
//     if (a>=0&&a<=9&& b>=0&&b<=9&&c>=0&&c<=9)
//         {
//             return a * 100 + b * 10 + c;
//         }
//         else {
//             return "Invalid";
//         }
// }
// document.write(`Result = ${Task3(1,2,3)}<br/>`);
// document.write(`Result = ${Task3(123)}<br/>`);

// let Task4 = (a,b) =>
// {
//     if (b == undefined)
//     {
//         b=a;
//     }
// let z =a*b;
// return z;
// }
// document.write(`Result = ${Task4(2,3)}<br/>`);
// document.write(`Result = ${Task4(2)}<br/>`);

// let Task5 = (a) => {
//     if (a <= 0) {
//         return "Invalid";
//     }
//     let sum = 0; 
//     for (let i = 1; i < a; i++) 
//     { 
//         if (a % i === 0) 
//         { 
//             sum += i;
//         }
//     }
//     return sum===a;
// }
// // document.write(`Result = ${Task5(10)}<br/>`);
// // document.write(`Result = ${Task5(6)}<br/>`);


// let Task6 = (min,max) =>
// {
//     for(let i = min; i<=max;i++)
//     {
//         if (Task5(i)==true) 
//         {
//             document.write(`${i} is a perfect number<br/>`);
//         }
//     }
// }
// Task6(1, 30);


// let Task7 = (a,b,c) => 
// {
//     if (a < 0 || a > 23 || b < 0 || b > 59 || c < 0 || c > 59) {
//         return "Invalid";
//     }
//     if(b===undefined||b===0)
//     {
//         b="00";
//     }
//     if(c===undefined||c===0)
//     {
//         c="00";
//     }
// document.write(`Time = ${a}:${b}:${c}<br/>`);
// }
// Task7(1,30,30);
// Task7(1,30,90);
// Task7(1,30);
// Task7(1,30,0);

// let Task8 = (a,b,c)=>
// {
//     if (a < 0 || a > 23 || b < 0 || b > 59 || c < 0 || c > 59) {
//         return"Invalid";
// }
// if(b===undefined)
//     {
//         b=0;
//     }
//     if(c===undefined)
//     {
//         c=0;
//     }
// let seconds = c +b*60+a*3600;
// document.write(`Result = ${seconds}<br/>`);

// }
// Task8(1, 30, 30);  
// Task8(2, 0, 0);    
// Task8(0, 45, 15);  
// Task8(-1, 30, 30);


let Task9 = (a) =>
{
    if(a<0)
    {
        return"Invalid";
    }
    let hours = Math.floor(a/3600);
    let minutes = Math.floor((a%3600)/60);
    let seconds = a%60;
   
document.write(`Time = ${hours}:${minutes}:${seconds}<br/>`);
}
Task9(5430);
Task9(-1);
Task9(60);

