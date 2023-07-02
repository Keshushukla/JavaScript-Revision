// console.log('Hello World' [10])

 // CELCIUS TO FARENHIT


// let celcius =10;
// let farenhit = (celcius * 1.8) + 32;
// console.log(farenhit);


//  CONDITIONAL EXERCISE
// let cash = 50;
// let price = 40;

// if (cash > price) {
//     let x = cash - price;
//     console.log(`Remaining Money is ${x} returned`);
// }
// else if (cash === price) {
//     let x = cash - price;
//     console.log(`Remaining Money is ${x} returned`);
// }
// if (cash < price) {
//     let x = cash - price;
//     console.log(`Remaining Money  ${x * -1} required`);
// }

// let isStoreOpen = true;

// let result = isStoreOpen && (cash > price) ? 'give receipt' : 'do not give receipt';
// console.log(result);

// LOOPS


// WHILE LOOP

// let count=1;

// while(count<=100){
//     console.log(count);
//     count++;
// }

// FOR LOOP

// for (let i = 1 ; i <=20 ; i++){
//     if(i % 3 === 0){
//         if(i% 5 === 0){
//             console.log("Frontend Simplified");
//         }
//         else{
//             console.log("Frontend");
//         }
//     }
//     else if(i % 5 === 0){
//         if(i% 3 === 0){
//             console.log("Frontend Simplified");
//         }
//         else{
//             console.log("Simplified");
//         }
//     }
//     else{
//         console.log(i);
//     }

// }

// const str="Frontend Simplified";

// for (let i = 0 ; i <str.length ; i++){
//     console.log(str[i]);
// }

// function convertCelciusToFahrenheit (num){
//     let fahrenheit = (num * 1.8) + 32;
//     console.log(`convertCelciusToFahrenheit(${num}) -> ${fahrenheit}`);
// }

// convertCelciusToFahrenheit(0);
// convertCelciusToFahrenheit(10);
// convertCelciusToFahrenheit(30);

// ARRAY FILTER

// let grades= ['A+','A','Fail'];
// let newArr = grades.filter((element)=> element!='Fail'
// )
// console.log(newArr);

// let grades1 = ['Fail','Fail','B'];
// let newArr1 = grades1.filter((grades1)=>grades1!='Fail')
// console.log(newArr1);

// let grades2 = ['Fail'];
// let newArr2 = grades2.filter(element=>element != 'Fail')
// console.log(newArr2);

// ;
// ;

// let grades= ['A+','A','Fail'];
// let newArr=[];
// for(let i =0;i<grades.length;i++){
//     if(grades[i] !='Fail'){
//         newArr.push(grades[i]);
//     }
// }
// console.log(newArr)



// ARRAY MAP

// let dollars = [1, 5, 10, 3];
// let newArr = dollars.map ((element)=>{
//     return element * 100;
// })
// console.log(newArr);

// let dollars = [1, 5, 10, 3];
// let newArr = [];
// for(let i=0;i<dollars.length;i++ ){
//     newArr.push(dollars[i]*100);
// }
// console.log(newArr);

// let users =[
//     {
//         username:'abc',
//         email:'abc@gmail.com',
//         password:'abc123',
//         subscriptionStatus:'Subscribed',
//         discordId:'abc456',
//         lessonCompleted:'Yes',
//     },
//     {
//         username:'def',
//         email:'def@gmail.com',
//         password:'def123',
//         subscriptionStatus:'Subscribed',
//         discordId:'def456',
//         lessonCompleted:'Yes',
//     },
//     {
//         username:'ghi',
//         email:'ghi@gmail.com',
//         password:'ghi123',
//         subscriptionStatus:'Subscribed',
//         discordId:'ghi456',
//         lessonCompleted:'Yes',
//     }];

// function register (
//     username,
//     email,
//     password,
//     subscriptionStatus,
//     discordId,
//     lessonCompleted)
//      {
//     let user={ 
//     username:username,
//     email:email,
//     password:password,
//     subscriptionStatus:subscriptionStatus,
//     discordId:discordId,
//     lessonCompleted:lessonCompleted,
//     }
//     users.push(user);
// }

// register(
//     "pqr",
//     "pqr@gmail.com",
//     "pqr123",
//     "Subscribed",
//     "pqr4567",
//     "Yes"
// )

// for(let i=0;i<users.length;i++){
// console.log(users[i]);
// }

// let users =[
//     {
//         username:'abc',
//         email:'abc@gmail.com',
//         password:'abc123',
//         subscriptionStatus:'Subscribed',
//         discordId:'abc456',
//         lessonCompleted:'Yes',
//     },
//     {
//         username:'def',
//         email:'def@gmail.com',
//         password:'def123',
//         subscriptionStatus:'Subscribed',
//         discordId:'def456',
//         lessonCompleted:'Yes',
//     },
//     {
//         username:'ghi',
//         email:'ghi@gmail.com',
//         password:'ghi123',
//         subscriptionStatus:'Subscribed',
//         discordId:'ghi456',
//         lessonCompleted:'Yes',
//     }];

//     function register (user){
//         users.push(user);
//     }

//     register(
//         {
//             username:'pqr',
//             email:'pqr@gmail.com',
//             password:'pqr123',
//             subscriptionStatus:'Subscribed',
//             discordId:'pqr456',
//             lessonCompleted:'Yes',
//         }
//     );

//     console.log(users);

// function changeTitleToRed () {
//     document.querySelector("button").style.color = 'red'
// }

// function toggleDarkMode () {
//     document.querySelector('body').classList.toggle("dark-theme")
// }


// PROMISE

function getVideo(subscriptionStatus) {
    return new Promise ((resolve,reject)=>{
    if (subscriptionStatus === "VIP"){
        

        
        resolve("show video");
    }
    else if (subscriptionStatus === "FREE"){
        resolve("show trailer");
    }
    else{
        reject("no video");
    }
})
}

async function main() {
    console.log(await getVideo("VIP"));
}

main();