// ~~~~~~~Imports~~~~~~~~~

import { allCustomers, allRooms, allBookings, bookingPost } from "./apiCalls";
import Customer from "./classes/customer.js";
import Hotel from "./classes/hotel.js";
import "./css/styles.css";
import "./images/turing-logo.png";

// ~~~~~~~Global Variables~~~~~~~~~

let dayjs = require("dayjs");
let hotel;
let currentUser;

// ~~~~~~~Query Selectors~~~~~~~~~

let test = document.querySelector(".test-button");
let sideInfo = document.querySelector(".side-info");
let bookingSection = document.querySelector(".main-info");
let loginPage = document.querySelector(".login-page");
let loginButton = document.querySelector(".login-button");
let totalCost = document.querySelector(".total-cost");
let dashTitle = document.querySelector(".dashboard-title");
let cardTitle = document.querySelector(".card-titles");
let calendar = document.querySelector(".calendar");
let checkDate = document.querySelector(".check-date-button");
let returnToBookings = document.querySelector(".return-to-bookings-button");
let roomTypeDropdown = document.querySelector(".room-drop-down");
let inputOne = document.querySelector(".login-input-one");
let inputTwo = document.querySelector(".login-input-two");
let loginError = document.querySelector(".login-error");
let calendarError = document.querySelector(".calendar-error");

// ~~~~~~~Promise All~~~~~~~~~

Promise.all([allCustomers(), allRooms(), allBookings()]).then((values) => {
  hotel = new Hotel(values[0].customers, values[1].rooms, values[2].bookings);
  hotel.generateCustomers();
  createCustomer();
  currentUser = hotel.allCustomers[10];
});

// ~~~~~~~Event Listeners~~~~~~~~~

loginButton.addEventListener("click", () => {
  let userNumber = inputOne.value.split("r");
  if (validateUser()) {
    currentUser = hotel.allCustomers[userNumber[1] - 1];
    hideLogin();
    unhideDashboard();
    createTitle();
    createTotal();
    createBookingCard();
    calendar.min = dayjs(Date.now()).format("YYYY-MM-DD");
    calendar.value = dayjs(Date.now()).format("YYYY-MM-DD");
  } else {
    inputOne.value = "";
    inputTwo.value = "";
    loginError.innerText =
      "Invalid credentials, please check your username and password";
  }
});

returnToBookings.addEventListener("click", () => {
  clearChildren(bookingSection);
  createBookingCard();
});

checkDate.addEventListener("click", () => {
  if (calendar.value < dayjs(Date.now()).format("YYYY-MM-DD")) {
    showCalendarError();
    setTimeout(() => {
      hideCalendarError();
    }, 3000);
    return;
  }
  let totalRooms = currentUser.filterByDate(hotel, calendar);
  let filteredRooms = currentUser.filterByRoom(roomTypeDropdown, totalRooms);
  console.log(totalRooms);
  if (!totalRooms.length) {
    clearChildren(bookingSection);
    bookingSection.innerHTML += `<div class='card-titles' tabindex="0">We are very sorry that there are no bookings available. Please try adjusting your search parameters.</div>`;
    return;
  }
  cardTitle.innerText = "Please choose a room to book!";
  if (roomTypeDropdown.value === "choose") {
    createBookingCardByDateAndFilter(totalRooms);
  } else {
    createBookingCardByDateAndFilter(filteredRooms);
  }
});

bookingSection.addEventListener("click", (event) => {
  if (event.target.dataset.room) {
    let userId = currentUser.id;
    let calendarValue = calendar.value.split("-").join("/");
    let roomNumber = parseInt(event.target.dataset.room);
    let somedata = {
      userID: userId,
      date: calendarValue,
      roomNumber: roomNumber,
    };
    bookingPost(somedata).then(() => {
      allBookings()
        .then((data) => {
          hotel.bookings = data.bookings;
        })
        .then(() => {
          updateSingleUser();
          clearChildren(bookingSection);
          createTotal();
          createBookingCard();
        });
    });
  }
});

// ~~~~~~~Functions~~~~~~~~~

function validateUser() {
  let customerCheck = inputOne.value.substring(0, 8);
  let splitInput = inputOne.value.split("r");
  if (splitInput[1] > 50) {
    return false;
  }
  if (splitInput[1] < 1) {
    return false;
  }
  if (customerCheck !== "customer") {
    return false;
  }
  if (inputTwo.value !== "overlook2021") {
    return false;
  }
  return true;
}

function createBookingCardByDateAndFilter(rooms) {
  bookingSection.innerHTML = "";
  bookingSection.innerHTML += `<div class = "card-titles" tabindex=0>Rooms available for this date</div>`;
  rooms.forEach((room) => {
    bookingSection.innerHTML += `<div class = 'room-card' tabindex=0>
    <p class="room-card-text">Room Number: ${room.number}</p>
    <p class="room-card-text">Room Type: ${room.roomType}</p>
    <p class="room-card-text">Bed Size: ${room.bedSize}</p>
    <p class="room-card-text">Number of Beds: ${room.numBeds}</p>
    <p class="room-card-text">Bidet: ${room.bidet}</p>
    <p class="room-card-text">Cost Per Night: ${room.costPerNight}</p>
    <button class="book-now" data-room="${room.number}">Book Now!</button>
    </div>`;
  });
}

function createBookingCard() {
  bookingSection.innerHTML = "";
  bookingSection.innerHTML += `<div class = "card-titles" tabindex=0>Your current and past bookings</div>`;
  currentUser.userBookings.forEach((booking) => {
    bookingSection.innerHTML += `<div class = 'booking-card' tabindex=0>
        <p class="booking-card-text">Date: ${booking.date}</p>
        <p class="booking-card-text">Room Number: ${booking.roomNumber}</p>
        </div>`;
  });
}

function createTitle() {
  dashTitle.innerHTML = `Thanks for choosing Overlook Hotel, ${currentUser.name}`;
}

function createTotal() {
  totalCost.innerHTML = `Total Expenditures: $${currentUser.calculateTotal()}`;
}

function updateSingleUser() {
  hotel.singleCustomerBookingUpdate(currentUser);
}

function createCustomer() {
  hotel.allCustomers.forEach((customer) => {
    hotel.customerBookings(customer);
    hotel.customerRooms(customer);
  });
}

function clearChildren(node) {
  node.innerHTML = "";
}

function hideLogin() {
  loginPage.classList.add("hidden");
}

function unhideDashboard() {
  bookingSection.classList.remove("hidden");
  sideInfo.classList.remove("hidden");
}

function hideCalendarError() {
  calendarError.classList.add("hidden");
}

function showCalendarError() {
  calendarError.classList.remove("hidden");
}
