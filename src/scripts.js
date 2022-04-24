import { allCustomers, allRooms, allBookings, bookingPost } from "./apiCalls";
import Customer from "./classes/customer.js";
import Hotel from "./classes/hotel.js";
import "./css/styles.css";
import "./images/turing-logo.png";

let dayjs = require("dayjs");
let hotel;
let currentUser;
let test = document.querySelector(".test-button");
let bookingSection = document.querySelector(".main-info");
let totalCost = document.querySelector(".total-cost");
let dashTitle = document.querySelector(".dashboard-title");
let cardTitle = document.querySelector(".card-titles");
let calendar = document.querySelector(".calendar");
let checkDate = document.querySelector(".check-date-button");
let roomTypeDropdown = document.querySelector(".room-drop-down");
let bookButton = document.querySelector(".book-now");

test.addEventListener("click", () => {
  createTitle();
  createTotal();
  createBookingCard();
  calendar.min = dayjs(Date.now()).format("YYYY-MM-DD");
  calendar.value = dayjs(Date.now()).format("YYYY-MM-DD");
});

checkDate.addEventListener("click", () => {
  cardTitle.innerText = "Please choose a room to book!";
  let totalRooms = currentUser.filterByDate(hotel, calendar);
  let filteredRooms = currentUser.filterByRoom(roomTypeDropdown, totalRooms);
  if (!totalRooms.length) {
    return (bookingSection.innerHTML += `<div>We are very sorry that there are no bookings available. Please try adjusting your search parameters.</div>`);
  }
  if (roomTypeDropdown.value === "choose") {
    createBookingCardByDateAndFilter(totalRooms);
  } else {
    createBookingCardByDateAndFilter(filteredRooms);
  }
});

bookingSection.addEventListener("click", (event) => {
  // console.log(event.target.dataset.room)
  if (event.target.dataset.room) {
    let userId = currentUser.id;
    let calendarValue = calendar.value.split("-").join("/");
    let roomNumber = parseInt(event.target.dataset.room);
    let somedata = {
      userID: userId,
      date: calendarValue,
      roomNumber: roomNumber,
    };
    let response = bookingPost(somedata);
    response
      .then((response) => {
        if (!response.ok) {
          throw new Error("error");
        }
      })
      .then(() => {
        const result = allBookings();
        hotel.bookings = result;
      });
    console.log(somedata);
  }
});

// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file

// An example of how you tell webpack to use an image (also need to link to it in the index.html)

Promise.all([allCustomers(), allRooms(), allBookings()]).then((values) => {
  hotel = new Hotel(values[0].customers, values[1].rooms, values[2].bookings);
  hotel.generateCustomers();
  createCustomer();
  currentUser = hotel.allCustomers[2];
});

function createBookingCardByDateAndFilter(rooms) {
  bookingSection.innerHTML = "";
  rooms.forEach((room) => {
    bookingSection.innerHTML += `<div class = 'booking-card'>
    <p>Room Number: ${room.number}</p>
    <p>Room Type: ${room.roomType}</p>
    <p>Bed Size: ${room.bedSize}</p>
    <p>Number of Beds: ${room.numBeds}</p>
    <p>Bidet: ${room.bidet}</p>
    <p>Cost Per Night: ${room.costPerNight}</p>
    <button class="book-now" data-room="${room.number}">Book Now!</button>
    </div>`;
  });
}

function createBookingCard() {
  currentUser.userBookings.forEach((booking) => {
    bookingSection.innerHTML += `<div class = 'booking-card'>
        <p>Date: ${booking.date}</p>
        <p>Room Number: ${booking.roomNumber}</p>
        </div>`;
  });
}

function createTitle() {
  dashTitle.innerHTML = `Thanks for choosing Overlook Hotel, ${currentUser.name}`;
}

function createTotal() {
  totalCost.innerHTML = `Total Spent: ${currentUser.calculateTotal()}`;
}

function createCustomer() {
  hotel.allCustomers.forEach((customer) => {
    hotel.customerBookings(customer);
    hotel.customerRooms(customer);
  });
}
