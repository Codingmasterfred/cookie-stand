'use strict'
//random function between max and min input
function getRandom(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
    // 0 >= random #  <= 1  * limit
}

let HourOfOperation = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"]

function cookiesStandLocation(min, max, avg, location) {
    let stand = {};
    stand.min = min;
    stand.max = max;
    stand.avg = avg;
    stand.location = location;
    stand.cookiesPerHour = [];
    stand.hourDemo = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"]

    stand.getCustomers = function () {
        //console.log(`Stand Max: ${stand.max} || this Max: ${this.max}`);
        return getRandom(this.min, this.max);
    }

    stand.getCookie = function getCookies() {
        for (let i = 0; i < this.hourDemo.length; i++) {
            // console.log('seattle avg cookies/sale', this.avg);
            // console.log('seattle avg customers/hour', this.customersPerHour());
            console.log(this.avg)
            this.cookiesPerHour.push(Math.ceil(this.avg * this.getCustomers()));

        }
        return this.cookiesPerHour;
    }
    stand.getCookie()

    let sum = 0;
    stand.render = function () {
        let trDemo = document.createElement('tr');
        let localeTD = document.createElement('td');
        localeTD.innerHTML = this.location;
        trDemo.append(localeTD);

        for (let i = 0; i < this.hourDemo.length; i++) {
            let newEl = document.createElement("td")
            newEl.innerHTML = this.cookiesPerHour[i]
            trDemo.append(newEl)
            sum += this.cookiesPerHour[i];
        }
        let sumTotal = document.createElement("td");
        sumTotal.innerHTML += sum;
        trDemo.append(sumTotal);



        document.getElementById('jsTbl').append(trDemo);
    }
    return stand;
};

const Seattle = new cookiesStandLocation(23, 65, 6.3, 'Seattle');

// seattle.cookiesPerHour[i];
// var element = document.querySelectorAll(".sData");
let blankth = document.createElement("th")
let NewRow = document.createElement("tr")
NewRow.append(blankth);
for (let i = 0; i < Seattle.hourDemo.length; i++) {
    let ThE = document.createElement("th");
    ThE.innerHTML = Seattle.hourDemo[i];
    
    NewRow.append(ThE);
    // document.getElementById("jsTbl").append(TotalTh)
}
let table = document.getElementById("jsTbl")
table.append(NewRow)
let TotalTh = document.createElement("th")
TotalTh.innerHTML = "total Location"
NewRow.append(TotalTh)
Seattle.render()
// element.forEach(function(elements, i){
    //     elements.innerText = Seattle.cookiesPerHour[i]
    // })
    
    const Tokyo = cookiesStandLocation(3, 24, 1.2, 'Tokyo');
    Tokyo.render()
    // Tokyo.render()
    // seattle.cookiesPerHour[i];
    // var element = document.querySelectorAll(".tData");
    // element.forEach(function(elements, i){
        //     elements.innerText = Tokyo.cookiesPerHour[i]
// })

const Dubai = new cookiesStandLocation(11, 38, 3.7, 'Dubai');
Dubai.render()
// Dubai.render()
// seattle.cookiesPerHour[i];
// var element = document.querySelectorAll(".dData");
// element.forEach(function(elements, i){
//     elements.innerText = Dubai.cookiesPerHour[i]
// })

const Paris = new cookiesStandLocation(20, 38, 2.3, 'Paris');
Paris.render()
// Paris.render()
// seattle.cookiesPerHour[i];
// var element = document.querySelectorAll(".pData");
// element.forEach(function(elements, i){
    //     elements.innerText = Paris.cookiesPerHour[i]
    // })
    
    const Lima = new cookiesStandLocation(2, 16, 4.6, 'Lima');
    Lima.render()
    // Lima.render()
    // seattle.cookiesPerHour[i];
    // var element = document.querySelectorAll(".lData");
    // element.forEach(function(elements, i){
        //     elements.innerText = Lima.cookiesPerHour[i]

        

        
        
        document.getElementById("Cookie-Locations-Button").addEventListener(
            "click",
            (e) => {
                e.preventDefault()
                let inputLocation = document.getElementById("Cookie-Locations").value
                let inputMin = document.getElementById("min").value
                let inputMax = document.getElementById("max").value
                let inputAvg = document.getElementById("avg").value
                let Memphis = new cookiesStandLocation(inputMin,inputMax,inputAvg,inputLocation)
                let table = document.getElementById("jsTbl");
                let newRow = document.createElement("tr");
                let localeTD = document.createElement("td");
                localeTD.innerHTML = Memphis.location;
                newRow.append(localeTD);
                for (let i = 0; i < Memphis.hourDemo.length; i++) {
                    let newEl = document.createElement("td");
                    console.log(Memphis.cookiesPerHour)
                    newEl.innerHTML = Memphis.cookiesPerHour[i];
                    newRow.append(newEl);
                }
                let sumTotal = document.createElement("td");
                sumTotal.innerHTML = Memphis.cookiesPerHour.reduce((acc, val) => acc + val, 0);
                newRow.append(sumTotal);
                table.append(newRow);

                

            });
      
            
            
            
            // })
            // let NewTR = document.createElement("tr")
            
            // table.append(NewTR);

// let TotalTD = document.createElement("td");
// TotalTD.innerHTML = "total an hour"
// NewTR.append(TotalTD)

// let sum2 = 0;
// for (let i = 0; i < HourOfOperation.length; i++) {
//     let HourTotal = Seattle.cookiesPerHour[i] + Tokyo.cookiesPerHour[i] + Dubai.cookiesPerHour[i] + Paris.cookiesPerHour[i] + Lima.cookiesPerHour[i];
//     // arrayC.push(HourTotal)
//     let HourTotalTD = document.createElement("td");
//     HourTotalTD.innerHTML = HourTotal
//     NewTR.append(HourTotalTD)
//     sum2 += HourTotal
// }
// let TotalOfTotalHours = document.createElement("td")
// TotalOfTotalHours.innerHTML += sum2;
// NewTR.append(TotalOfTotalHours)


// function CreateRows() {
//     let submit = {};
//     submit.submitRow = document.createElement("tr")
//     submit.submitTD = document.createElement("td")
//     submit.input = document.getElementById("Cookie-Locations").value

//     this.submitRow.innerHTML = this.input
//     table.append(this.submitRow)
//     this.submitRow.append(this.submitTD)
    



//     submit.Render = function () {

//     }
//     submit.submitButton = document.querySelector("button");
//     submit.UserOutputLocation = ;
    
//     submit.addEventListener(
//     "click",
//         (event) => (this.submitTD.textContent = `You pressed "${event.key}".`))
// }

// //   arrayc[i]



// seattle.getCustomers();
        // const tokyo = cookiesStandLocation(3, 24, 1.2, 'Tokyo');
        // tokyo.getCustomers();
        // tokyo.getCookies();









