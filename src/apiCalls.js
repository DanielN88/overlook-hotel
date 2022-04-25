const BASE_URL = "http://localhost:3001";

const allCustomers = () =>
  fetch(`${BASE_URL}/api/v1/customers`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .catch((err) => console.log(err));

const allRooms = () =>
  fetch("http://localhost:3001/api/v1/rooms")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .catch((err) => console.log(err));

const allBookings = () => 
  fetch("http://localhost:3001/api/v1/bookings")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .catch((err) => console.log(err));


const bookingPost = (somedata) =>
  fetch("http://localhost:3001/api/v1/bookings", {
    method: "POST",
    body: JSON.stringify(somedata),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw Error(response.statusText);
        }
    })
    .catch((err) => console.log(err));

export { allCustomers, allRooms, allBookings, bookingPost };
