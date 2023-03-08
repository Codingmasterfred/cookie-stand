'use strict'
//random function between max and min input
function getRandom(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
    // 0 >= random #  <= 1  * limit
}



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


    stand.render = function () {
        let trDemo = document.createElement('tr');
        let localeTD = document.createElement('td');
        localeTD.innerHTML = this.location;
        trDemo.append(localeTD);
        
        for (let i = 0; i < this.hourDemo.length; i++) {
            let newEl = document.createElement("td")
            newEl.innerHTML = this.cookiesPerHour[i]
            trDemo.append(newEl)
            
        }
        document.getElementById('jsTbl').append(trDemo);
        
        
        
    }
    return stand;
};

const Memphis = new cookiesStandLocation()
const Seattle = new cookiesStandLocation(23, 65, 6.3, 'Seattle');

// seattle.cookiesPerHour[i];
// var element = document.querySelectorAll(".sData");
let blankth = document.createElement("th")
document.getElementById('jsTbl').append(blankth); 
for (let i = 0; i < Seattle.hourDemo.length; i++) {
    let ThE = document.createElement("th");
    ThE.innerHTML = Seattle.hourDemo[i];
    
    document.getElementById('jsTbl').append(ThE); 
}

Seattle.render()
// element.forEach(function(elements, i){
//     elements.innerText = Seattle.cookiesPerHour[i]
// })

const Tokyo = new cookiesStandLocation(3, 24, 1.2, 'Tokyo');
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
    // })



// seattle.getCustomers();
// const tokyo = cookiesStandLocation(3, 24, 1.2, 'Tokyo');
// tokyo.getCustomers();
// tokyo.getCookies();









