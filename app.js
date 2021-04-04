'use strict';

let time = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
    minCustomer: 23,
    maxCustomer: 65,
    avgCookiesPerHour: 6.3,
    timeOnSeattle: time,
    customersNumberPerHour: [],
    cookiesPurchasedPerHour: [],
    totalcookies: 0,
    RandomCustomerNumber: function () {
        for (let i = 0; i < time.length; i++) {

            this.customersNumberPerHour.push(randomNumberOf(this.minCustomer, this.maxCustomer));
        }

    },


    CookiesP: function () {
        for (let i = 0; i < time.length; i++) {

            this.cookiesPurchasedPerHour.push(Math.floor(this.customersNumberPerHour[i] * this.avgCookiesPerHour));
            this.totalcookies = this.totalcookies + this.cookiesPurchasedPerHour[i];

        }

    },

}

seattle.RandomCustomerNumber();
seattle.CookiesP();


function randomNumberOf(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}




let parent = document.getElementById('first');
let h1Element = document.createElement('h1');
parent.appendChild(h1Element);
h1Element.textContent = 'seattle';

let ulElement = document.createElement('ul');
parent.appendChild(ulElement);




for (let x = 0; x < 14; x++) {

    let liElement = document.createElement('li');
    ulElement.appendChild(liElement);

    liElement.textContent = time[x] + ':' + seattle.cookiesPurchasedPerHour[x] + 'cookies';

}

let liElement = document.createElement('li');
ulElement.appendChild(liElement);
liElement.textContent = 'total' + ':' + seattle.totalcookies;







let tokyo = {
    minCustomer: 3,
    maxCustomer: 24,
    avgCookiesPerHour: 1.2,
    timeOnTokyo: time,
    customersNumberPerHour: [],
    cookiesPurchasedPerHour: [],
    totalcookies: 0,
    RandomCustomerNumber: function () {
        for (let i = 0; i < time.length; i++) {

            this.customersNumberPerHour.push(randomNumberOf(this.minCustomer, this.maxCustomer));
        }

    },


    CookiesP: function () {
        for (let i = 0; i < time.length; i++) {

            this.cookiesPurchasedPerHour.push(Math.floor(this.customersNumberPerHour[i] * this.avgCookiesPerHour));
            this.totalcookies = this.totalcookies + this.cookiesPurchasedPerHour[i];

        }

    },

}

tokyo.RandomCustomerNumber();
tokyo.CookiesP();


function randomNumberOf(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}




let parent2 = document.getElementById('first');
let h1Element2 = document.createElement('h1');
parent.appendChild(h1Element2);
h1Element2.textContent = 'tokyo';

let ulElement2 = document.createElement('ul');
parent.appendChild(ulElement2);




for (let x = 0; x < 14; x++) {

    let liElement2 = document.createElement('li');
    ulElement2.appendChild(liElement2);

    liElement2.textContent = time[x] + ':' + tokyo.cookiesPurchasedPerHour[x] + 'cookies';

}

let liElement2 = document.createElement('li');
ulElement2.appendChild(liElement2);
liElement2.textContent = 'total' + ':' + tokyo.totalcookies;









let dubai = {
    minCustomer: 11,
    maxCustomer: 38,
    avgCookiesPerHour: 3.7,
    timeOnDubai: time,
    customersNumberPerHour: [],
    cookiesPurchasedPerHour: [],
    totalcookies: 0,
    RandomCustomerNumber: function () {
        for (let i = 0; i < time.length; i++) {

            this.customersNumberPerHour.push(randomNumberOf(this.minCustomer, this.maxCustomer));
        }

    },


    CookiesP: function () {
        for (let i = 0; i < time.length; i++) {

            this.cookiesPurchasedPerHour.push(Math.floor(this.customersNumberPerHour[i] * this.avgCookiesPerHour));
            this.totalcookies = this.totalcookies + this.cookiesPurchasedPerHour[i];

        }

    },

}

dubai.RandomCustomerNumber();
dubai.CookiesP();


function randomNumberOf(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}



let parent3 = document.getElementById('first');
let h1Element3 = document.createElement('h1');
parent.appendChild(h1Element3);
h1Element3.textContent = 'dubai';

let ulElement3 = document.createElement('ul');
parent.appendChild(ulElement3);




for (let x = 0; x < 14; x++) {

    let liElement3 = document.createElement('li');
    ulElement3.appendChild(liElement3);

    liElement3.textContent = time[x] + ':' + dubai.cookiesPurchasedPerHour[x] + 'cookies';

}

let liElement3 = document.createElement('li');
ulElement3.appendChild(liElement3);
liElement3.textContent = 'total' + ':' + dubai.totalcookies;









let Paris = {
    minCustomer: 20,
    maxCustomer: 38,
    avgCookiesPerHour: 2.3,
    timeOnParis: time,
    customersNumberPerHour: [],
    cookiesPurchasedPerHour: [],
    totalcookies: 0,
    RandomCustomerNumber: function () {
        for (let i = 0; i < time.length; i++) {

            this.customersNumberPerHour.push(randomNumberOf(this.minCustomer, this.maxCustomer));
        }

    },


    CookiesP: function () {
        for (let i = 0; i < time.length; i++) {

            this.cookiesPurchasedPerHour.push(Math.floor(this.customersNumberPerHour[i] * this.avgCookiesPerHour));
            this.totalcookies = this.totalcookies + this.cookiesPurchasedPerHour[i];

        }

    },

}

Paris.RandomCustomerNumber();
Paris.CookiesP();


function randomNumberOf(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}



let parent4 = document.getElementById('first');
let h1Element4 = document.createElement('h1');
parent.appendChild(h1Element4);
h1Element4.textContent = 'Paris';

let ulElement4 = document.createElement('ul');
parent.appendChild(ulElement4);




for (let x = 0; x < 14; x++) {

    let liElement4 = document.createElement('li');
    ulElement4.appendChild(liElement4);

    liElement4.textContent = time[x] + ':' + Paris.cookiesPurchasedPerHour[x] + 'cookies';

}

let liElement4 = document.createElement('li');
ulElement4.appendChild(liElement4);
liElement4.textContent = 'total' + ':' + Paris.totalcookies;











let Lima = {
    minCustomer: 20,
    maxCustomer: 16,
    avgCookiesPerHour: 4.6,
    timeOnLima: time,
    customersNumberPerHour: [],
    cookiesPurchasedPerHour: [],
    totalcookies: 0,
    RandomCustomerNumber: function () {
        for (let i = 0; i < time.length; i++) {

            this.customersNumberPerHour.push(randomNumberOf(this.minCustomer, this.maxCustomer));
        }

    },


    CookiesP: function () {
        for (let i = 0; i < time.length; i++) {

            this.cookiesPurchasedPerHour.push(Math.floor(this.customersNumberPerHour[i] * this.avgCookiesPerHour));
            this.totalcookies = this.totalcookies + this.cookiesPurchasedPerHour[i];

        }

    },

}

Lima.RandomCustomerNumber();
Lima.CookiesP();


function randomNumberOf(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}




let parent5 = document.getElementById('first');
let h1Element5 = document.createElement('h1');
parent.appendChild(h1Element5);
h1Element5.textContent = 'Lima';

let ulElement5 = document.createElement('ul');
parent.appendChild(ulElement5);




for (let x = 0; x < 14; x++) {

    let liElement5 = document.createElement('li');
    ulElement5.appendChild(liElement5);

    liElement5.textContent = time[x] + ':' + Lima.cookiesPurchasedPerHour[x] + 'cookies';

}

let liElement5 = document.createElement('li');
ulElement5.appendChild(liElement5);
liElement5.textContent = 'total' + ':' + Lima.totalcookies;
