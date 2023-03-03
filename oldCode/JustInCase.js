// const seattle = {
//     min: 23,
//     max: 65,
//     avg: 6.3,
//     location: 'Seattle',
//     hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
//     customersPerHour: function() {
//         // console.log(this.max);
//         // console.log(this.min);
//         let randomnumber = getRandom(this.max, this.min);
//         return randomnumber;
//     },
//     cookiesPerHour: [],
//     getCookies: function() {
//         for(let i = 0; i < this.hoursOfOperation.length; i++) {
//             // console.log('seattle avg cookies/sale', this.avg);
//             // console.log('seattle avg customers/hour', this.customersPerHour());
//             let cookiesSold = Math.ceil(this.avg * this.customersPerHour())
//             this.cookiesPerHour.push(cookiesSold);
//         }
//         return this.cookiesPerHour;
//     },
    
// } 
// // console.log(seattle.customersPerHour)  
// // console.log(seattle.getCookies(this.cookiesPerHour))

//     let hoursDemo1 = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
//     let cookieDemo1 = seattle.getCookies(this.cookiesPerHour);
//     let hoursArray1 = document.querySelector('.a')
//     for(let i = 0; i < hoursDemo1.length; i++) {
//         let variable = document.createElement("li");
//         // console.log(cookieDemo1)
//         variable.innerHTML = `${hoursDemo1[i]}: ${cookieDemo1[i]} cookies`;
//         hoursArray1.append(variable);
    
//     }
     
// //---------------------Tokyo-------------------------Tokyo---------------------------Tokyo---------------------------------------------------------------------
//     function getRandom(max, min) {
//         return Math.ceil(Math.random() * (max - min) + min);
//         // 0 >= random #  <= 1  * limit
//     }
    
//     const Tokyo = {
//         min: 3,
//         max: 24,
//         avg: 1.2,
//         location: 'Tokyo',
//         hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
//         customersPerHour: function() {
//             // console.log(this.max);
//             // console.log(this.min);
//            let Num = getRandom(this.max, this.min);
//            return Num
//         },
//         cookiesPerHour: [],
//         getCookies: function() {
//             for(let i = 0; i < this.hoursOfOperation.length; i++) {
//                 // console.log('seattle avg cookies/sale', this.avg);
//                 // console.log('seattle avg customers/hour', this.customersPerHour());
//                 let SoldPerHour = Math.ceil(this.avg * this.customersPerHour());
//                 this.cookiesPerHour.push(SoldPerHour);
//             }
//             return this.cookiesPerHour;
//         },
        
//     }
    
//         let hoursDemo2 = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
//         let cookieDemo2 = Tokyo.getCookies(this.cookiesPerHour);
//         let hoursArray2 = document.querySelector('.b')
//         for(let i = 0; i < hoursDemo2.length; i++) {
//             let variable = document.createElement("li");
//             variable.innerHTML = `${hoursDemo2[i]}: ${cookieDemo2[i]} cookies`;
//             hoursArray2.append(variable);
//         }

// //-----Dubai---------------------Dubai-------------------------Dubai------------------------------------------------------------------------------------------------------
//     function getRandom(max, min) {
//         return Math.ceil(Math.random() * (max - min) + min);
//         // 0 >= random #  <= 1  * limit
//     }
    
//     const Dubai = {
//         min: 11,
//         max: 38,
//         avg: 3.7,
//         location: 'Dubai',
//         hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
//         customersPerHour: function() {
//             // console.log(this.max);
//             // console.log(this.min);
//             return getRandom(this.max, this.min);
//         },
//         cookiesPerHour: [],
//         getCookies: function() {
//             for(let i = 0; i < this.hoursOfOperation.length; i++) {
//                 // console.log('seattle avg cookies/sale', this.avg);
//                 // console.log('seattle avg customers/hour', this.customersPerHour());
//                 this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
//             }
//             return this.cookiesPerHour;
//         },
        
//     }
    
//         let hoursDemo3 = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
//         let cookieDemo3 = Dubai.getCookies(this.cookiesPerHour);
//         let hoursArray3 = document.querySelector('.c')
//         for(let i = 0; i < hoursDemo3.length; i++) {
//             let variable = document.createElement("li");
//             variable.innerHTML = `${hoursDemo3[i]}: ${cookieDemo3[i]} cookies`;
//             hoursArray3.append(variable);
//         }
// //------------Paris---------------------------Paris-----------------------------Paris---------------------------------------------------------------------------------------------
// function getRandom(max, min) {
//     return Math.ceil(Math.random() * (max - min) + min);
//     // 0 >= random #  <= 1  * limit
// }

// const Paris = {
//     min: 20,
//     max: 38,
//     avg: 2.3,
//     location: 'Paris',
//     hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
//     customersPerHour: function() {
//         // console.log(this.max);
//         // console.log(this.min);
//         return getRandom(this.max, this.min);
//     },
//     cookiesPerHour: [],
//     getCookies: function() {
//         for(let i = 0; i < this.hoursOfOperation.length; i++) {
//             // console.log('seattle avg cookies/sale', this.avg);
//             // console.log('seattle avg customers/hour', this.customersPerHour());
//             this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
//         }
//         return this.cookiesPerHour;
//     },
    
// }

//     let hoursDemo4 = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
//     let cookieDemo4 = Paris.getCookies(this.cookiesPerHour)
//     let hoursArray4 = document.querySelector('.d')
//     for(let i = 0; i < hoursDemo4.length; i++) {
//         let variable = document.createElement("li");
//         variable.innerHTML = `${hoursDemo4[i]}: ${cookieDemo4[i]} cookies`;
//         hoursArray4.append(variable);
//     }
// //----------Lima-----------------Lima--------------------Lima------------------------------------------------------------------------------------------------------------------------
// function getRandom(max, min) {
//     return Math.ceil(Math.random() * (max - min) + min);
//     // 0 >= random #  <= 1  * limit
// }

// const Lima = {
//     min: 2,
//     max: 16,
//     avg: 4.6,
//     location: 'Lima',
//     hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
//     customersPerHour: function() {
//         // console.log(this.max);
//         // console.log(this.min);
//         return getRandom(this.max, this.min);
//     },
//     cookiesPerHour: [],
//     getCookies: function() {
//         for(let i = 0; i < this.hoursOfOperation.length; i++) {
//             // console.log('seattle avg cookies/sale', this.avg);
//             // console.log('seattle avg customers/hour', this.customersPerHour());
//             this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
//         }
//         return this.cookiesPerHour;
//     },
    
// }

//     let hoursDemo5 = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
//     let cookieDemo5 = Lima.getCookies(this.customersPerHour);
//     let hoursArray5 = document.querySelector('.e')
//     for(let i = 0; i < hoursDemo5.length; i++) {
//         let variable = document.createElement("li");
//         variable.innerHTML = `${hoursDemo5[i]}: ${cookieDemo5[i]} cookies`;
//         hoursArray5.append(variable);
//     }