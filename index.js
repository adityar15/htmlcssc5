// // console.log("Hello world")
// let firstName
// // console.log(firstName)

// var lastName = "Kadam"
// // console.log(lastName)
// firstName = "XYZ"

// const studentCount = 200

// let sum = sumOfTwoNumbers(30, 50)
// // console.log(sum)

// sum = sumOfTwoNumbers(90,30)
// // console.log(sum)

// function sumOfTwoNumbers(num1, num2) {
//     return num1 + num2
// }


// const subtract = (a,b) => a-b
// subtract(10, 5)



// const person = {
//     name: "Sean",
//     expertise: "Bitcoin",
//     podcasts: [{
//         title: "Something with Bitcoin",
//         description: "A podcast about Bitcoin"
//     }]
// }

// // console.log("person object", person)

// const names = ["Shawn", "Lewis", "Lauren", 1, 2, true, person]
// // console.log(names)

// for(let i=0; i < names.length; i++)
// {
//    if(typeof names[i] === "number")
//    {
//     console.log(names[i])
//    }
//    else if(typeof names[i] === "string")
//    {
//     console.log("this is a string")
//    }
// }
// // names.forEach((item, index) => {
// // console.log(index, item)
// // })
// let choice = 1
// while(choice <= 10)
// {
//     // some DOM manipulation
//     console.log(choice)
//     choice ++
// }

// let fruits = [
//     {
//         id: 1,
//         name: "Apple",
//         price: 20
//     },
//     {
//         id: 2,
//         name: "Banana",
//         price: 30
//     },
//     {
//         id: 3,
//         name: "Orange",
//         price: 40
//     }
// ]

// let newFruits = fruits.filter((item, index, array) => {
//     return item.id != 3
// })

// console.log("filtered", newFruits)

// let discountedFruits = fruits.map((item, index, array)=>{
//     return {
//         ...item,
//         price: item.price/2
//     }
// })
// console.log("discounted", discountedFruits)

// const total = fruits.reduce((acc, currentValue)=>{
//     acc += currentValue.price
//     // acc = acc + currentValue.price
//     return acc
// } ,0)

// console.log("total", total)

// const orangeDetails = fruits.find((item,index,array)=>{
//     return item.name.toLowerCase().includes("ora")
// })

// console.log("orangeDetails", orangeDetails)
// // orangeDetails = 100

// fetch("https://api.github.com/users/adir15",{
//     method: "GET"
// }).then(res => res.json()).then(data => {
//     console.log("login", data.login)
// })

// asdl.mas
// asldkasdk
// asdkasjd