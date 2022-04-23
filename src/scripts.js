import { allCustomers, allRooms, allBookings } from './apiCalls'
import Customer from './classes/customer.js'
import Hotel from './classes/hotel.js'
import './css/styles.css';
import './images/turing-logo.png'

let dayjs = require('dayjs')
let hotel;
let currentUser;
let test = document.querySelector(".test-button")
let bookingSection = document.querySelector(".main-info")
let totalCost = document.querySelector(".total-cost")
let dashTitle = document.querySelector(".dashboard-title")
let calendar = document.querySelector(".calendar")
let checkDate = document.querySelector(".check-date-button")

test.addEventListener('click', () => {
    createTitle()
    createTotal()
    createBookingCard()
    calendar.min = dayjs(Date.now()).format("YYYY-MM-DD")
    calendar.value = dayjs(Date.now()).format("YYYY-MM-DD")
})

checkDate.addEventListener('click', () => {
    let roomsTaken = hotel.bookings.filter((booking) => {
       let formatDate = booking.date.split('/').join("-")
        return formatDate === calendar.value
    })
    let totalRooms = hotel.rooms
    console.log(hotel.rooms, 'firstrooms')
    console.log(hotel.bookings)
    totalRooms.forEach((room, index) => {
        roomsTaken.forEach(taken => {
            if (room.number === taken.roomNumber) {
                totalRooms.splice(index, 1)
            }
        })
    }) 
    console.log(hotel.rooms)
    console.log(totalRooms, 'avail')
    // console.log(calendar.value, 'cali')
    // console.log(hotel.bookings)
    // console.log(hotel.rooms)
    // console.log(hotel.bookings[5].date)
    console.log(roomsTaken, 'taken')
})

// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file

// An example of how you tell webpack to use an image (also need to link to it in the index.html)


Promise.all([allCustomers, allRooms, allBookings]).then((values) => {
    hotel = new Hotel(values[0].customers, values[1].rooms, values[2].bookings)
    hotel.generateCustomers()
    createCustomer()
    currentUser = hotel.allCustomers[9]
    // console.log(currentUser.userBookings)
    // console.log(currentUser.userRooms)
    // console.log(currentUser.calculateTotal())
    // check()
})

// function check() {
//     console.log(currentUser)
//     console.log(hotel)
// }

function createBookingCardByDate() {

}

function createBookingCard() {
    currentUser.userBookings.forEach((booking) => { 
        bookingSection.innerHTML += `<div class = 'booking-card'>
        <p>Date: ${booking.date}</p>
        <p>Room Number: ${booking.roomNumber}</p>
        </div>`
    })
}

function createTitle() {
    dashTitle.innerHTML = `Thanks for choosing Overlook Hotel, ${currentUser.name}`
}

function createTotal() {
    totalCost.innerHTML = `Total Spent: ${currentUser.calculateTotal()}`
}

function createCustomer() {
    hotel.allCustomers.forEach(customer => {
        hotel.customerBookings(customer)
        hotel.customerRooms(customer)
    }) 
}

// createBookingCard()